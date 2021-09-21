<template>
  <div v-if="!barn">CARGANDO</div>
  <div v-else class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6">
    <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">{{ barn.name }}</h1>
    <button @click="router.push({name: 'indexBarns'})" class="absolute -top-5 right-0 bg-white px-2 text-3xl text-av-100">
      <fai icon="hand-point-left"/>
    </button>
    <div class="flex items-center gap-2">
      <h2 class="font-bold text-gray-500 text-2xl">Tipo de galpón:</h2>
      <span class="text-xl">{{ capitalize(lowerCase(barn.type)) }}</span>
    </div>
    <div class="flex items-center gap-2">
      <h2 class="font-bold text-gray-500 text-2xl">Cantidad de lotes:</h2>
      <span class="text-xl">{{ barn.lots_number }}</span>
    </div>

  </div>
</template>

<script>
import { ref, computed } from "vue";
import capitalize from "lodash/capitalize";
import lowerCase from "lodash/lowerCase";
import { useRouter } from "vue-router";
import { barnsService } from "../../../services";

export default {

  setup() {

    const router = useRouter();
    const barn = ref();
    const id = computed( () => router.currentRoute.value.params.id);
    barnsService.one(id.value)
        .then(response => {
          barn.value = response;
        })

    return { barn, router, capitalize, lowerCase }

  }

}
</script>