<template>
  <create-settlements-modal :open="open.createSettlementsModal" @close="open.createSettlementsModal = false"/>
  <delete-settlements-modal :open="open.deleteSettlementsModal" @close="open.deleteSettlementsModal = false"/>

  <create-barns-modal :open="open.createBarnsModal" @close="open.createBarnsModal = false"/>
  <delete-barns-modal :open="open.deleteBarnsModal" @close="open.deleteBarnsModal = false" :barn="payload.barn"/>

  <create-lots-modal :open="open.createLotsModal" @close="open.createLotsModal = false"/>
  <delete-lots-modal :open="open.deleteLotsModal" @close="open.deleteLotsModal = false" :lot="payload.lot"/>
  <alert-info-modal :open="open.alertInfosModal" @close="open.alertInfosModal = false" :info="payload.info"/>
</template>

<script>
import { useModals } from "../../use";
import CreateSettlementsModal from "./CreateSettlementsModal.vue";
import DeleteSettlementsModal from "./DeleteSettlementsModal.vue";
import CreateBarnsModal from "./CreateBarnsModal.vue";
import DeleteBarnsModal from "./DeleteBarnsModal.vue";
import CreateLotsModal from "./CreateLotsModal.vue";
import DeleteLotsModal from "./DeleteLotsModal.vue";
import AlertInfoModal from "./AlertInfoModal.vue";


export default {

  components: {
    CreateLotsModal,
    DeleteBarnsModal,
    CreateBarnsModal,
    CreateSettlementsModal,
    DeleteSettlementsModal,
    DeleteLotsModal,
    AlertInfoModal
  },

  setup() {

    const { open, payload } = useModals();
    return { open, payload }

  }

}
</script>