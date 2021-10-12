<template>
  <div>
    <div class="flex-grow">
      <div class="p-4">
        <form id="form" @submit.prevent="store" class="flex flex-col md:px-5">
          <div class="mt-3">
            <av-input id="name" label="Nombre:"/>
          </div>
          <div class="mt-3">
            <av-select v-model="type" id="type" label="Tipo:">
              <option class="bg-av-50 bg-opacity-10" value="cautividad">Cautividad</option>
              <option class="bg-av-50 bg-opacity-10" value="gallinasFelices">Gallinas Felices</option>
            </av-select>
          </div>
          <div class="my-5">
            <button type="submit" class="btn btn-persimmon text-white">Crear galpón</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useBarns } from "../../use";
import AvInput from "./AvInput.vue";
import AvSelect from "./AvSelect.vue";
import {useToast} from "vue-toastification";

export default {

  components: { AvSelect, AvInput },

  setup(props, computed) {

    const type = ref('cautividad');
    const { storeBarns } = useBarns();

    const toast = useToast()

    const store = () => {
      const formData = new FormData(document.getElementById('form'));
      const attributes = {};

      for (let pair of formData.entries()) {
        attributes[pair[0]] = pair[1].trim() === '' ? null : pair[1].trim();
      }

      storeBarns(attributes).then(() => {
        computed.emit('created')
        toast.success('Galpón creado con éxito')
      }).catch(() => {
        toast.error('Ha ocurrido un error al crear el galpón, verifica tus datos')
      })
    }

    return { store, type };

  },
}
</script>