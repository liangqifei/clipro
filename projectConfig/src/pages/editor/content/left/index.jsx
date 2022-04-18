import { Button } from 'ant-design-vue';
import {defineComponent} from 'vue'
import './index.less'
export default defineComponent({
  props:{
    leftType:{
      type:Number,
      default:1
    }
  },
  setup(props,{emit}) {
      return () => (
          <div class='editor-content-main-left'>
            <MButton type="primary">
              Primary Button
            </MButton>
          </div>
      );
    },
  });