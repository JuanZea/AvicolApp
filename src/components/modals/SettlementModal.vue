<template>
  <TransitionRoot appear :show="isOpenForm" as="template">
    <Dialog as="div" @close="close">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="h-full px-4 text-center">
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0"/>
          </TransitionChild>
          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <h1 class="font-bold font-lato text-3xl"> Crear una nueva finca </h1>
              <create-settlements/>
              <div class="content-end self-end">
                <div class="flex content-end justify-end h-full max-h-48">
                  <img class="object-contain" src="/src/assets/illustrations/form-settlement.svg">
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
      <DialogOverlay class="fixed inset-0 bg-black opacity-30"/>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'
import useSettlements from "../../use/useSettlements";
import CreateSettlements from "../../views/auth/settlements/CreateSettlements.vue";

export default {
  name: 'Modal',
  components: {
    CreateSettlements,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  setup() {
    const {isOpenForm, close} = useSettlements()

    return {
      isOpenForm,
      close
    }
  }
}
</script>