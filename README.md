# Form Builder with Vite+Vue3+VeeValidate
VeeBuilder is a comprehensive form builder for `Vue3` with `VeeValidate`  that makes form development a breeze.

## Download ^^
#### `$ git clone https://github.com/AlaaProg/VeeBuilder.git `
#### `$ cd ./VeeBuilder `
#### `$ npm install` 
#### `$ npm run dev` 

# Usage

### Init 
[i18n](https://vee-validate.logaretm.com/v4/guide/i18n#using-vee-validatei18n)
```js
import VeeBuilder from "./plugins/FormBuilder"
import en from '@vee-validate/i18n/dist/locale/en.json';

app.use(VeeBuilder, locale={
    en: {
        ...en 
    },
})

```

### Simple
```html  
<templat>
    <div> 
        <!-- simple -->
        <FormBuilder :schema="schema" show-errors />
        <!-- show-errors props to show error field -->
    </div>
<templat>
```

### Define component
```html

<script setup>
import { defineAsyncComponent } from 'vue';
import { FormBuilder } from './plugins/FormBuilder';

// import schema form
import schema from './form.json';


</script>
```


### schema: from.js 

[Available Rules](https://vee-validate.logaretm.com/v4/guide/global-validators#available-rules)

```json 
[
    {
        "placeholder": "Enter Email",
        "class": "w-full",
        "name": "email",
        "rules": "required|email"
    },
    {
        "placeholder": "Full Name",
        "class": "w-full",
        "name": "fullname",
        "rules": "required",
        "label": "Full Name"
    },
    {
        "placeholder": "Select Avtar",
        "class": "w-full",
        "name": "avtar",
        "rules": "required|image",
        "type": "file" 
    }
]
```

### Slot Field
[Field Props](https://vee-validate.logaretm.com/v4/api/field#props)
```html
    <div> 
        <FormBuilder :schema="schema" show-errors >
            <!-- inse -->
            <template v-slot:title-input="{ handleChange, handleBlur, field }">
                <input 
                    @change="handleChange"
                    @blur="handleBlur"
                    :name="field.name" 
                    type="text"
                >
            </template>

            <template v-slot:file-input="{ schema, field }">
                <input 
                    :name="field.name" 
                    :type="schema.type"
                >
            </template>
        </FormBuilder>
        <!-- show-errors props to show error field -->
    </div>
```


### Slot label and message error for field
```html
    <div> 
        <!-- simple -->
        <FormBuilder :schema="schema" show-errors >
                <!-- Set message error for filed -->
                <template v-slot:NameField-error="{ message }">
                    <div style="color:red">
                        {{ message }}
                    </div>
                </template>

                <!-- Set label for filed -->
                <template v-slot:NameField-label="{ field }">
                    <!-- <div style="color:red"> -->
                        <label :for="field.name" style="padding: 10px; color: rgb(37, 37, 37);">
                            {{ field.label }}
                        </label>
                    <!-- </div> -->
                </template>
        </FormBuilder>
        <!-- show-errors props to show error field -->
    </div>
```

### Slot label and message error for all field
```html
    <div> 
        <!-- set default message-error and label styles -->
        <FormBuilder :schema="schema" show-errors>

                <!-- Set default message error for fileds -->
                <template v-slot:message-error="{ message }">
                    <div style="color:red">
                        {{ message }}
                    </div>
                </template>

                <!-- Set default label for fileds -->
                <template v-slot:label="{ field }">
                    <!-- <div style="color:red"> -->
                        <label :for="field.name" style="padding: 10px; color: rgb(37, 37, 37);">
                            {{ field.label }}
                        </label>
                    <!-- </div> -->
                </template>
        </FormBuilder>
    </div>
<templat>
```