import { createFromIconfontCN } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import {basicProps,defaultEmits,customEmits} from './props'
const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});

export default defineComponent({
  props:basicProps(),
  emits:[...defaultEmits(),...customEmits()],
  setup() {
    return <MIcon type={`icon-${type}`} />
  }
});