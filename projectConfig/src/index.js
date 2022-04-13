import { createApp, h, nextTick } from 'vue'
import App from './App'
import { message,} from 'ant-design-vue';
async function bootstarp(){
    const app = createApp(App);
    app.config.globalProperties.$message = message;
    app.mount('#app')
}
bootstarp()