<template>
  <!-- VeeValidate From  -->
  <vee-form 
    class="fb-form" 
    :initial-values="values" 
    v-slot="slotProps" 
  >
    <!-- Slot header form  -->
    <slot name="header" v-bind="slotProps"></slot>

    <!-- Start Field  -->
    <div
        v-for="field in schema" :key="field.name"
        class="fb-field"
        :class="field.divClass"
      >
        <!-- Slot field v-slot:NameField="{ field }" -->
        <slot :name="field.name" v-bind='{ field }'>

            <!-- Slot label -->
            <slot :name="`${field.name}-label`" v-bind="{field}">
                <!-- label Tag -->
                <slot name="label" v-bind="{field}">
                  <label 
                    v-if="field.label" 
                    class="vee-field-label" 
                    :class="field.labelClass"
                    :for="field.name"
                  >
                      {{ field.label }}
                  </label>
                </slot>
            </slot>

            <!-- VeeValidate Field -->
            <vee-field  
                class="fb-field-input"
                :placeholder="field.placeholder"
                :rules="field.rules"
                :name="field.name"
                :type="field.type"
                :id="field.id"
                :as="field.as || 'input'"
                :standalone="field.standalone"
                :unchecked-value="field.uncheckedValue"
                :value="field.value"
                :class="field.class"
                v-slot="slotPropsVeeField"
              >
                <!-- v-slot  body field   -->
                <slot :name='`${field.name}-input`' v-bind="slotPropsVeeField">
                    <!-- If tag select set options  -->
                    <template v-if="field.as == 'select'">
                        <option 
                          class="fb-field-select-options"
                          v-for="(option, i) in field.options" 
                          :key="i"
                          :value="option.value" 
                          v-text="option.text"
                        > </option>
                    </template>
                </slot>
            </vee-field>

            <!-- slot message error for slot  -->
            <slot :name="`${field.name}-error`" v-bind="{
                errors: slotProps.errors, 
                field
              }">
              <slot name="message-error" v-bind="{ message: slotProps.errors[field.name] , field }">
                <div  
                  v-if="slotProps.errors[field.name] && showErrors" 
                  class="fb-field-error" 
                  v-bind="field.errorAttrs"
                >
                  {{ slotProps.errors[field.name] }}
                </div>  
              </slot>
            </slot>
        </slot>
    </div>

    <!-- Slot footer form  -->
    <slot v-bind="slotProps"></slot>
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
    values: Object,
    showErrors: Boolean
})

</script>
