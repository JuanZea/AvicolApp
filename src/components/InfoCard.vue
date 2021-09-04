<template>
  <div class="flex justify-center">
    <div :class="color || 'bg-white'" class="rounded-2xl p-6 shadow-lg max-w-xl">
      <div class="flex gap-2 items-center">
        <fas :icon="icon"/>
        <h1 class="font-bold font-rampart">{{ title }}</h1>
      </div>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {color: String, icon: String, title: String, desc: String}
}
</script>