import {defineComponent} from 'vue'
import './index.less'
import {componentMaps} from '../../../../../setComponent'
import { h } from 'vue';
export default defineComponent({
  props:{
    leftType:{
      type:Number,
      default:1
    }
  },
  setup(props,{emit}) {
      const renderItem=()=>{
        const arr=[]
        componentMaps&&componentMaps.forEach(item=>{
          console.log(item.component.render)
          arr.push(item.component.render())
        })
        return arr
      }
      return () => (
          <div class='left-basic-com-list'>
            {renderItem()}
          </div>
      );
    },
  });



