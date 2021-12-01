import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { defineAsyncComponent } from "vue"

const FormBuilder = defineAsyncComponent(
  ()=> import('./component/FormBuilder.vue') 
)

export default {
  install(app, locale={}) {
    // define all rule 

    // https://vee-validate.logaretm.com/v4/guide/global-validators#available-rules
    Object.keys(AllRules).forEach(rule => defineRule(rule, AllRules[rule]) );

    configure({
        generateMessage: localize(locale),
      });
  },
};


export { FormBuilder }