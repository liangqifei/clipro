import {  defineComponent,onMounted,ref } from "vue";
import { ConfigProvider,Button } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
import './App.less'
const App = defineComponent({
  setup() {
    const locale=ref({
        locale: zhCN
    })
    const count = ref(0);

    const inc = () => {
      count.value++;
    };
    
    onMounted(()=>{
        ConfigProvider.config({
            theme: {
                primaryColor: '#25b864',
            },
        });
    })

    return () => (
        <ConfigProvider locale={locale}>
            APP
            <div onClick={inc}>{count.value}</div>
            <Button type="primary">Primary Button</Button>
        </ConfigProvider>
    );
  },
});
export default App