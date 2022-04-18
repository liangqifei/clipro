import {defineComponent} from 'vue'
import LeftSeciton from './left'
import CenterSeciton from './center'

import RightSeciton from './right'

export default defineComponent({
    props:{
      leftType:{
        type:Number||String,
        default:'1'
      }
    },
    setup(props) {
      console.log(props)
      return () => (
          <div class='editor-content-main'>
            <LeftSeciton {...props}/>
            <CenterSeciton />
            <RightSeciton />
          </div>
      );
    },
  });