
import {defineComponent} from 'vue'
import AppHeader from './header'
import AppContent from './content'
import AppMenu from './menu'
import { Button } from 'ant-design-vue';

const AppLayout = defineComponent({
    setup() {
      return ()=>(
        <div class='app-body'>
            
            <AppMenu></AppMenu>
            <div class='app-content'>
                <AppHeader></AppHeader>
                <AppContent></AppContent>
            </div>
        </div>
      )
    },
  });
  export default AppLayout