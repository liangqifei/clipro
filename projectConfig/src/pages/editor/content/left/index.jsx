import { Button } from 'ant-design-vue';
import {defineComponent} from 'vue'
import './index.less'
import ProjectTree from './projectTree'
import BasicCom from './basicCom'
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
            {props.leftType==1&&<ProjectTree ></ProjectTree>}
            {props.leftType==2&&<BasicCom ></BasicCom>}

          </div>
      );
    },
  });