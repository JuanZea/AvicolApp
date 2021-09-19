<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <select v-model="selectValue" :id="id" :name="name || id" class="mt-1 block w-full pl-3 pr-10 py-2 font-glory border-gray-300 focus:outline-none focus:ring-av-50 focus:border-av-50 rounded-md">
      <slot/>
    </select>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {

  emits: ['update:modelValue'],

  props: { id: String, label: String, name: String, modelValue: String },

  setup(props, context) {

    const selectValue = ref(props.modelValue);
    watch(computed(() => props.modelValue), value => selectValue.value = value);
    watch(selectValue, value => {context.emit('update:modelValue', value)});
    return { selectValue }

  }

}
</script>