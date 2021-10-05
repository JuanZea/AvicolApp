<template>
  <div v-if="!lot">CARGANDO</div>
  <div v-else class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6">
    <button @click="router.push({name: 'indexBarns'})" class="absolute -top-5 right-0 bg-white px-2 text-3xl text-av-100">
      <fai icon="hand-point-left"/>
    </button>
    <div class="w-full border-b-2 pb-4">
      <div class="flex justify-between">
        <div>
          <h1 class="font-glory font-bold text-4xl">Lote {{ lot.id }}</h1>
          <div><span class="font-glory text-3xl text-gray-500">Edad: {{lot.age}}</span></div>
        </div>
      </div>
    </div>

    <div class="mx-4 mt-4">
      <div>
        <div class="my-4">
          <h2 class="font-glory font-bold text-2xl lg:text-3xl">Vacunas</h2>
          <div class="py-4 text-gray-500">
            <div>
              <div>
                <span class="text-xl font-bold lg:text-2xl">Viruela </span>
              </div>
              <div>
                <span class="">Primera Dosis: </span>
                <span class="">Septiembre 23 2021 </span>
              </div>
              <div>
                <span class="">Refuerzo: </span>
                <span class="">Septiembre 32 de 2021 </span>
              </div>
            </div>
            <div>
              <div>
                <span class="text-xl font-bold lg:text-2xl">Triquinosis: </span>
              </div>
              <div>
                <span class="">Primera Dosis: </span>
                <span class="">septiembre 23 de 2021 </span>
              </div>
              <div>
                <span class="">Refuerzo: </span>
                <span class="">septiembre 32 de 2021 </span>
              </div>
            </div>
            <div>
              <div>
                <span class="text-xl font-bold lg:text-2xl">NewCastle: </span>
              </div>
              <div>
                <span class="">Primera Dosis: </span>
                <span class="">septiembre 23 de 2021 </span>
              </div>
              <div>
                <span class="">Refuerzo: </span>
                <span class="">septiembre 32 de 2021 </span>
              </div>
            </div>
            <div>
              <div>
                <span class="text-xl font-bold lg:text-2xl">Burundanga: </span>
              </div>
              <div>
                <span class="">Primera Dosis: </span>
                <span class="">septiembre 23 de 2021 </span>
              </div>
              <div>
                <span class="">Refuerzo: </span>
                <span class="">septiembre 32 de 2021 </span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  </div>
</template>

<script>
import {ref, computed} from "vue";
import {lotsService} from "../../../services";
import capitalize from "lodash/capitalize";
import lowerCase from "lodash/lowerCase";
import {useRouter} from "vue-router";

export default {
  name: "ShowLots",

  setup(){
    const router = useRouter();
    const lot = ref()
    const id = computed(() => router.currentRoute.value.params.id);




    lotsService.one(id.value).then(response =>{
      console.log(response)
      lot.value = response
    })

    return {router, capitalize, lowerCase, lotsService, lot}
  }

}
</script>

<style scoped>

</style>