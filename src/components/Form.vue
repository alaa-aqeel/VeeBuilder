<template>
  <vee-form class="vee-builder-form" :initial-values="defaultValues" v-slot="{ errors }" >
    <slot name="header" v-bind="{errors}"></slot>
    <div
        v-for="field in schema" :key="field.name"
        class="vee-field"
        :class="field.divClass"
      >
        <slot :name="field.name" v-bind='{ field }'>
            <slot :name="`${field.name}-label`" v-bind="{field}">
                <label 
                  v-if="field.label" 
                  class="vee-field-label" 
                  :class="field.labelClass"
                  :for="field.name"
                >
                    {{ field.label }}
                </label>
            </slot>

            <vee-field  
                class="vee-field-input"
                :placeholder="field.placeholder"
                :rules="field.rules"
                :name="field.name"
                :type="field.type"
                :id="field.id"
                :as="field.as"
                :standalone="field.standalone"
                :unchecked-value="field.uncheckedValue"
                :value="field.value"
                :class="field.class"
                v-slot="Slotfield"
              >
                <slot :name='`${field.name}-input`' v-bind="Slotfield">
                    <template v-if="field.as == 'select'">
                        <option 
                          v-for="(option, i) in field.options" 
                          :key="i"
                          :value="option.value" 
                          v-text="option.text"
                        > </option>
                    </template>
                </slot>
            </vee-field>

            <slot :name="`${field.name}-error`" v-bind="{errors, field}">
              <div v-if="showErrors">
                <div  v-if="errors[field.name]" class="vee-field-error" v-bind="field.errorAttrs">
                  {{ errors[field.name] }}
                </div>        
              </div>
            </slot>
        </slot>
    </div>
    <slot v-bind="{errors}"></slot>
  </vee-form>
</template>
<script setup>
import { Field as VeeField, Form as VeeForm  } from 'vee-validate';
import { defineProps } from "vue"

defineProps({
    schema: {
      type: Array,
      required: true,
    },
    defaultValues: Object,
    showErrors: Boolean
})

</script>
