<template>
  <div class="m-5">
    <div class="container">
      <div class="alert flex flex-row items-center bg-green-200 p-5 rounded border-l-4 border-green-300">
        <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span class="text-green-500 flex content-center">
				  <fai icon="check"/>
				</span>
        </div>
        <div class="alert-content ml-4">
          <div class="alert-title font-semibold text-lg text-green-800">
            <h2 class="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
              Bienvenid@!!
            </h2>
          </div>
          <div class="alert-description text-sm text-green-600">
            Estás a un paso de finalizar la creación de tu cuenta, A continuación, es necesario registrar por lo menos
            una finca.
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 grid-flow-col gap-4">
        <create-settlements/>
        <div class="rounded-l-full gap-5 flex bg-av-10 p-2 items-center">
          <div class="content-end self-end">
            <div class="flex content-end justify-end h-full max-w-50 max-h-96">
              <img class="object-contain" src="/src/assets/illustrations/first-settlement.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateSettlements from "./CreateSettlements.vue";

export default {
  components: { CreateSettlements }
}
</script>