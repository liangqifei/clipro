import {defineComponent,reactive,watch} from 'vue'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons-vue';
import {Menu} from 'ant-design-vue'
import { Button } from 'ant-design-vue';

const MenuItem=Menu.Item
export default defineComponent({
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        Menu,
        MenuItem
    },
    setup() {
        const state = reactive({
            collapsed: false,
            selectedKeys: ['1'],
            openKeys: ['sub1'],
            preOpenKeys: ['sub1'],
        });
        const toggleCollapsed = () => {
            state.collapsed = !state.collapsed;
            state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };
      return () => (
          <div class={`app-menu ${state.collapsed?'closed':'opened'}`}>
            <Button onClick={toggleCollapsed} type="primary">
                {
                   state.collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />
                }
            </Button>
            <Menu  
                v-model:openKeys={state.openKeys}
                v-model:selectedKeys={state.selectedKeys}
                mode="inline"
                theme="dark"
                inline-collapsed={state.collapsed}
            >
                <Menu.Item key="1">
                    <span>Option 1</span>
                </Menu.Item>
            </Menu>
          </div>
      );
    },
  });