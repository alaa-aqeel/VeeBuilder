import { Field as VeeField, Form as VeeForm  } from 'vee-validate';
import { resolveDynamicComponent, defineComponent, h, createVNode } from 'vue'


export const Label = defineComponent({
    props:{
        text: String,
        for: String
    },
    setup(props, ctx) {
        const tagLabel = resolveDynamicComponent('label')

        return () => h(tagLabel, {for: props.for}, {
            default: ()=> props.text
        })
    }   
})

export const BuilderForm = defineComponent({
    props:{
        schema: {
            type: Array,
            default: ()=> []
        },
    },
    setup(props, ctx) {
        const createField = (props, slot) => {
            let errorMessage = createVNode('div', {}, {default:()=> "error"})
            if (slot) {
                return createVNode(
                    VeeField, 
                    props, 
                    {
                        default: (props) => slot(props)
                    }
                )
            }
            return createVNode(VeeField, props, {message: () => h('div', "error")})
        }

        const createFields = (veeProps) => {
            // set field 
            let fields = props.schema.map( 
                fieldProps=> ctx.slots[fieldProps.name] 
                                ? reateField(fieldProps, ctx.slots[fieldProps.name]) 
                                : createField(fieldProps)
            )

            // errors slot 
            if (ctx.slots.errors) {

                fields.unshift(createVNode(ctx.slots.errors,  {errors: veeProps.errors}))
            }

            // push default slot with props 
            fields.push( ctx.slots.default(veeProps) )
            return fields
        }
        
        return () => h(VeeForm, {},  {
            default: createFields
        })
    }
})
