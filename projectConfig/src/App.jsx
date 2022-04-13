import {  defineComponent,onMounted,ref } from "vue";
import { ConfigProvider, } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
import './App.less'
import AppLayout from "./layout";
const App = defineComponent({
  setup() {
    const locale=ref({
        locale: zhCN
    })
  
    return () => (
        <ConfigProvider locale={locale}>
            <AppLayout></AppLayout>
        </ConfigProvider>
    );
  },
});
export default App