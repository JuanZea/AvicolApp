<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" @close="close()">
      <div class="fixed inset-0 z-50 overflow-y-auto">
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
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <div class="inline-block h-screen align-middle flex justify-center items-center">
              <div class="inline-block p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <slot/>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
      <DialogOverlay class="fixed inset-0 bg-black opacity-30 z-40"/>
    </Dialog>
  </TransitionRoot>
</template>

<script>

import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";

export default {
  props: {open: {required: true, type: Boolean}},
  components: {
    TransitionRoot,
    TransitionChild,
    DialogOverlay,
    Dialog
  },
  setup(props, context) {
    const close = () => context.emit('close');
    return {close}
  }
}
</script>