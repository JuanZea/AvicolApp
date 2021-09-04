<template>
  <div
      class="form-input text-left"
      :class="{ 'has-error': !!errorMessage }"
  >
    <label :for="name" class="w-full text-sm font-medium text-gray-700">{{ label }}</label>
    <input
        :name="name"
        :id="name"
        :type="type"
        class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
        :value="inputValue"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
    />

    <span class="help-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
import {useField} from 'vee-validate';

export default {
  name: "FormInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
}
</script>

<style  scoped>
.form-input.has-error input {
  border-color: red;
}

.help-message {
  color: red;
}
</style>