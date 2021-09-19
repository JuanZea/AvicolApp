<template>
  <div class="overflow-auto bg-white shadow-md rounded m-6">
    <table class="min-w-max w-full table-auto">
      <thead>
      <tr class="bg-gray-200 text-gray-600 uppercase leading-normal">
        <th class="py-3 px-6 text-center" v-for="header in headers">{{ header }}</th>
      </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
      <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: { headers: { default: []} }
}
</script>