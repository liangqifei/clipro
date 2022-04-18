import {  defineComponent,onMounted,ref } from "vue";
import {Button,} from 'ant-design-vue'
import {buttonProps} from './props'
const props=buttonProps()
const MButton = defineComponent({
  props:props,
  setup(props,{slots}) {
    console.log(props,slots,'slslslslsl')
    return () => (
       <Button {...props} >
         {slots}
       </Button>
    );
  },
});
export default MButton