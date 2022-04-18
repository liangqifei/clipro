
import {defineComponent,reactive,ref} from 'vue'
import AppHeader from './header/index'
import AppContent from './content/index'
import AppMenu from './menu/index'
import './index.less'
const AppLayout = defineComponent({
    setup() {
      const state=reactive({
        leftType:1
      })
      const leftTypeChange=({key})=>{
        state.leftType=key
      }
      return ()=>(
        <div class='editor-body'>
            <AppHeader></AppHeader>
            <div class='editor-content'>
                <AppMenu onLeftTypeChange={leftTypeChange} /> 
                <AppContent leftType={state.leftType} />
            </div>
        </div>
      )
    },
  });
  export default AppLayout