<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <select v-model="selectValue" :id="id" :name="name || id" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      <slot/>
    </select>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  props: {id: String, label: String, name: String, modelValue: String},
  setup(props, context) {
    const selectValue = ref(props.modelValue);
    watch(selectValue, value => {context.emit('update:modelValue', value)});
    return {selectValue}
  }
}
</script>