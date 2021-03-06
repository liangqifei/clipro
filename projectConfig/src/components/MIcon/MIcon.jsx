import { createFromIconfontCN } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import {basicProps,defaultEmits,customEmits} from './props'
const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // ε¨ iconfont.cn δΈηζ
});

export default defineComponent({
  props:basicProps(),
  emits:[...defaultEmits(),...customEmits()],
  setup() {
    return <MIcon type={`icon-${type}`} />
  }
});