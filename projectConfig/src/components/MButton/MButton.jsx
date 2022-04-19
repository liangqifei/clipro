import {  defineComponent,onMounted,ref } from "vue";
import {Button,} from 'ant-design-vue'
import {basicProps,defaultEmits,customEmits} from './props'
//再次封装做这么一层是为了之后如果要替换框架的时候放在这里处理统一的替换
const MButton = defineComponent({
  props:basicProps(),
  emits:[...defaultEmits(),...customEmits()],
  setup(props,{slots}) {
    // return () => (
    //    <Button {...props} >
    //      {slots}
    //    </Button>
    // );
    return {
      ...props,
      slots:slots
    }
  },
  render(a,b,c,d,e){
    console.log(a,b,c,d,e)
    return <Button>
      1111
    </Button>
  }
});
export default MButton