<template>
  <div class="w-full">
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input v-model="inputValue" :type="type" :name="name || id" :id="id"
             class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
             :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {

  emits: ['update:modelValue'],

  props: {id: String, label: String, type: {default: 'text', type: String}, name: String, placeholder: String, modelValue: String},

  setup(props, context) {

    const inputValue = ref(props.modelValue);
    watch(inputValue, value => { context.emit('update:modelValue', value) });
    return { inputValue }

  }

}
</script>