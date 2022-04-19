import {  defineComponent,onMounted,reactive,ref } from "vue";
import {basicProps,defaultEmits,customEmits} from './props'
import { CaretDownOutlined,CaretRightOutlined } from '@ant-design/icons-vue';
import './index.less'
//再次封装做这么一层是为了之后如果要替换框架的时候放在这里处理统一的替换
const MTree= {
  name:'MTreeCom',
  props:basicProps(),
  render() {
    function DeepDom(list) {
       let arr = [];
       if (list.length > 0) {
           arr = list.map(t => {
               return (
                   <div class='mtree-item'>
                      <div class='mtree-item-title'>
                        <CaretDownOutlined slot="icon"/>
                        <div class='mtree-item-name' slot="title">{t.title}</div>
                      </div>
                      <div class='mtree-item-children'>
                        {t.children && DeepDom(t.children)}
                      </div>
                   </div>
               );
           });
       }
       return arr;
    }
    let {treeData} = this;
    return (
        <div class='mtree'>
            {DeepDom(treeData)}
        </div>
    );
  }
};
export default MTree