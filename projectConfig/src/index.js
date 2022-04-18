import { createApp, h, nextTick } from 'vue'
import App from './App'
import { message,} from 'ant-design-vue';
import setupRouter from './router'
import MButton from './components/Button';
async function bootstarp(){
    const app = createApp(App);
    setupRouter(app)
    app.config.globalProperties.$message = message;
    app.component('MButton', MButton)
    app.mount('#app')
}
bootstarp()