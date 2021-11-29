import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import arabic from '@vee-validate/i18n/dist/locale/ar.json';



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