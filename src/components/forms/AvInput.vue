<template>
  <div class="w-full form-input text-left"
       :class="{ 'has-error': (!!errorMessage || error) }">
    <label :for="id" class="self-start text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input v-model="inputValue" :type="type" :name="name || id" :id="id"
             class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
             @input="handleChange"
             @blur="handleBlur"
             :placeholder="placeholder"/>
      <span class="help-message">
        {{ (errorMessage || error) ? 'El valor ingresado es invalido' : ''}}
      </span>
    </div>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import {useField} from 'vee-validate';

export default {
  emits: ['update:modelValue'],
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: String,
      default: null
    },
    name: String,
    placeholder: String,
    modelValue: String
  },
  setup(props, context) {
    const inputValue = ref(props.modelValue);
    const {
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.modelValue,
    });

    watch(inputValue, value => {
      context.emit('update:modelValue', value)
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta
    }
  }
}
</script>
<style scoped>
.form-input.has-error input {
  border-color: red;
}

.form-input.has-error input:focus {
  border-color: red;
  outline: none;
  box-shadow: none;
}

.help-message {
  color: red;
}
</style>