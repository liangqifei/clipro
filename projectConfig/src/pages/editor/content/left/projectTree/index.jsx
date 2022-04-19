import { Form,Input, Modal } from "ant-design-vue";
import {  defineComponent,onMounted,reactive,ref ,toRefs} from "vue";
import MTree from '../../../../../components/MTree/MTree';
import './index.less'
const FormItem=Form.Item
export default defineComponent({
  props:{
    leftType:{
      type:Number,
      default:1
    }
  },
  setup(props,{emit}) {
      let state=reactive({
        visible:false,
        treeData:[{
          path:'/',
          title:'首页',
          children:[]
        }]
      })
      const addPage=()=>{
        state.visible=true
      }
      const handleOk=()=>{
        state.visible=false
      }
      const handleCancel=()=>{
        state.visible=false
      }
      return ()=>(
        <div class='project-tree'>
        <div class='create'>
          <MButton type='primary' size='small' block='true' onClick={addPage}>添加页面</MButton>
        </div>
        <div>{state.visible}</div>
        {state.visible&&<Modal 
          title="增加页面" 
          onOk={handleOk} 
          visible={true} 
          keyboard={false}
          maskClosable={false}
          onCancel={handleCancel}	
        >
          <Form >
            <FormItem label="路径" name="path" required>
              <Input />
            </FormItem>
            <FormItem label="当前位置" name="currentIndex">
              <Input />
            </FormItem>
            <FormItem label="页面名称" name="title" required>
              <Input />
            </FormItem>
          </Form>
        </Modal>}
        <MTree treeData={state.treeData}></MTree>
      </div>
      )
    },
   
  });