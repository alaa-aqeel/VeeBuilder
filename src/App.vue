<template>
    <div>
        <builder-form :schema="FormJSON" show-errors>
            <template v-slot:header="{ errors }">
                {{ errors }}
            </template>

            <template v-slot:title-input="{ handleBlur , handleChange }">
                <input type="file" @change="handleChange" @blur="handleBlur">
            </template>

            <button>
                Submit
            </button>
        </builder-form>
    </div>
</template>


<script setup>
import BuilderForm from './components/Form.vue';
import FormJSON from "./form.json"

</script>