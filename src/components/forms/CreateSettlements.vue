<template>
  <div>
    <div class="flex-grow">
      <div class="p-4">
        <form id="form" @submit="store" class="flex flex-col md:px-5">
          <div class="mt-3">
            <av-input id="name" label="Nombre:"/>
          </div>
          <div class="mt-3">
            <av-input id="location" label="Localidad:"/>
          </div>
          <div class="mt-3">
            <av-input id="address" label="Dirección:"/>
          </div>
          <div class="mt-3">
            <av-input id="sea_level" label="Altura sobre el nivel del mar:"/>
          </div>
          <div class="my-5">
            <button type="submit" class="btn btn-persimmon text-white">Crear finca</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AvInput from "./AvInput.vue";
import useSettlements from "../../use/useSettlements";
import { useRouter } from "vue-router";
import {useToast} from "vue-toastification";

export default {

  components: { AvInput },

  setup(props, computed) {

    const router = useRouter();
    const { storeSettlements } = useSettlements();
    const toast = useToast()

    const store = (event) => {
      event.preventDefault();
      const formData = new FormData(document.getElementById('form'));
      const attributes = {};

      for (let pair of formData.entries()) {
        attributes[pair[0]] = pair[1].trim() === '' ? null : pair[1].trim();
      }

      storeSettlements(attributes)
        .then(() => {
          if (router.currentRoute.value.name === 'myFirstSettlement') {
            router.push({name: 'home'});
          } else {
            computed.emit('created');
            toast.success('Finca creada con éxito')
          }
        }).catch(() => {
        toast.error('Ha ocurrido un error al crear la finca')
      })
    }

    return { store };

  },
}
</script>