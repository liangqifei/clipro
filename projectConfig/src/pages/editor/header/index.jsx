import { Button } from 'ant-design-vue';
import {defineComponent} from 'vue'
import Logo from './logo.png';
import './index.less'
export default defineComponent({
    setup() {
      return () => (
          <div class='editor-header'>
              <img src={Logo} class='logo'/>
          </div>
      );
    },
  });