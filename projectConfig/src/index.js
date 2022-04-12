import { createApp, h, nextTick } from 'vue'
import App from './App'

async function bootstarp(){
    const app = createApp(App);
    app.mount('#app')
}
bootstarp()