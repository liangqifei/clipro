export const buttonProps = () => ({
    type: {
        type:String,
        default:'default'
    },
    htmlType: { type: String , default: 'button' },
    shape: { 
        type: String ,
        default:'default' 
    },
    size: {
      type: String ,
      default:'middle'
    },
    loading: {
      type: Boolean|| Object ,
      default:false,
    },
    disabled: { type: Boolean, default: undefined },
    ghost: { type: Boolean, default: undefined },
    block: { type: Boolean, default: undefined },
    danger: { type: Boolean, default: undefined },
    icon:{
        type:String
    },
    href: String,
    target: String,
    title: String,
    onClick: {
        type: Function,
        default:()=>{
            
        }
    },
    onMousedown: {
      type: Function,
      default:()=>{

      }
    },
  });

  export const defaultEmits=()=>["click"]
  export const customEmits=()=>[]
