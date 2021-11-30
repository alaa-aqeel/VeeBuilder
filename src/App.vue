<template>
    <div >
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
</template>


<script setup>
import { defineAsyncComponent } from '@vue/runtime-core';

// import schema form
import schema from './form.json';

// Lazy load component
const FormBuilder = defineAsyncComponent(
    ()=> import('./components/FormBuilder.vue') 
)

</script>
