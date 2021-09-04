<template>
  <div>
      <p class="bg-palette-10 font-bold text-white p-5 border-solid border-4 border-av-300 mt-4 mb-4 text-center text-3xl rounded-lg ">{{settlement ? settlement.data.name : null }}</p>
      <div class="w-max items-center ml-auto mr-auto flex rounded border-solid border-4 border-av-300">
        <div class="grid grid-cols-2 p-8 pr-16  gap-4">
          <div class="flex flex-col font-bold gap-2 xl:text-xl">
            <span>Locacion: </span>
            <span>Dirección:</span>
            <span>Nivel del mar:</span>
          </div>

          <div class="flex flex-col gap-2 xl:text-xl">
            <span class="break-all">{{settlement ? settlement.data.location : null }}</span>
            <span class="break-all">{{settlement ? settlement.data.address : null }}</span>
            <span class="break-all">{{settlement ? settlement.data.sea_level : null }} m.s.n.m</span>
          </div>
        </div>
      </div>
    <div class="container ml-auto mr-auto w-max mt-32">
      <table>
        <thead>
          <tr>
            <th class="border border-black px-4 py-2">Pais</th>
            <th class="border border-black px-4 py-2">Ciudad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-black px-4 py-2">Peru</td>
            <td class="border border-black px-4 py-2">Lima</td>
          </tr>
          <tr>
            <td class="border border-black px-4 py-2">Colombia</td>
            <td class="border border-black px-4 py-2">Bogota</td>
          </tr>
          <tr>
            <td class="border border-black px-4 py-2">USA</td>
            <td class="border border-black px-4 py-2">Washimgton</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>


</template>

<script>
import {settlementsService} from "../../../services";
import {ref} from "vue";

export default {
  setup() {
    const settlement = ref();
    settlementsService.one(1).then( response => {
      settlement.value = response.data;
    })
    return {settlement};
  }
}

</script>

<style>

</style>