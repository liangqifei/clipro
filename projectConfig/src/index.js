import { createApp, h, nextTick } from 'vue'
import App from './App'
import { message,} from 'ant-design-vue';
import setupRouter from './router'
import {setComGloble} from './setComponent'
async function bootstarp(){
    const app = createApp(App);
    setupRouter(app)
    setComGloble(app)
    app.config.globalProperties.$message = message;
    app.mount('#app')
}
bootstarp()