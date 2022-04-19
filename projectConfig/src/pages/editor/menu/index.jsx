import {defineComponent,reactive,watch} from 'vue'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
  } from '@ant-design/icons-vue';
import {Menu,Button  } from 'ant-design-vue'
import {useRoute} from 'vue-router'
const MenuItem=Menu.Item
const MenuItemGroup=Menu.ItemGroup
const MenuSubMenu=Menu.SubMenu
export default defineComponent({
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
        Menu,
        MenuItem,
        MenuSubMenu,
        MenuItemGroup
    },
    emits:['leftTypeChange'],
    setup(props,{emit}) {
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
        const menuSelect=({ item, key, selectedKeys })=>{
            emit('leftTypeChange',{ item, key, selectedKeys })
        }
      return () => (
          <div class={`editor-menu ${state.collapsed?'closed':'opened'}`}>
            {/* <div class='menu-open-icon'>
                <Button onClick={toggleCollapsed} type="primary">
                    {
                    state.collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />
                    }
                </Button>
            </div> */}
            <Menu  
                v-model:openKeys={state.openKeys}
                v-model:selectedKeys={state.selectedKeys}
                mode="inline"
                inline-collapsed={state.collapsed}
                onSelect={menuSelect}
            >
                <MenuItem
                    icon={<PieChartOutlined />}
                    key="1"
                >
                    <span>页面</span>
                </MenuItem>
                <MenuItem
                    icon={<PieChartOutlined />}
                    key="2"
                >
                    <span>基本组件</span>
                </MenuItem>
           
                <MenuItem
                    icon={<PieChartOutlined />}
                    key="3"
                >
                    <span>容器组件</span>
                </MenuItem>
                <MenuItem
                    icon={<PieChartOutlined />}
                    key="4"
                >
                    <span>业务组件</span>
                </MenuItem>
            </Menu>
          </div>
      );
    },
  });