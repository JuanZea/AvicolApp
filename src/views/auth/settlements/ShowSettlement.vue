<template>
  <div v-if="activeSettlement" class="p-4 mt-4">
    <div class="relative border-dashed border-gray-300 border-4 p-4">
      <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">Detalles de la finca</h1>
     <div class="flex justify-between gap-2">
       <div class="relative flex flex-col justify-between gap-2 font-glory">
         <div class="flex flex-col">
           <span class="font-glory font-bold text-gray-500">Localización</span>
           {{ activeSettlement.location }}
         </div>
         <div class="flex flex-col">
           <span class="font-glory font-bold text-gray-500">Dirección</span>
           {{ activeSettlement.address }}
         </div>
         <div class="flex flex-col">
           <span class="font-glory font-bold text-gray-500">Altura al nivel del mar</span>
           {{ activeSettlement.sea_level }}
         </div>
       </div>
       <div class="flex">
         <img class="object-contain self-end max-h-32" src="/src/assets/illustrations/settlement.svg">
       </div>
     </div>
    </div>
  </div>
</template>

<script>
import useSettlements from "../../../use/useSettlements";

export default {
  setup() {
    const { activeSettlement } = useSettlements();
    return { activeSettlement };
  },
}
</script>