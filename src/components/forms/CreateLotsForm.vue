<template>
  <div>
    <div class="flex-grow">
      <div class="p-4">
        <form id="form" @submit.prevent="store" class="flex flex-col md:px-5">
          <div class="flex gap-2 my-3">
            <av-input id="age" type="number" label="Edad (Semanas):"/>
            <av-input id="hens_number" type="number" label="Cantidad de gallinas:"/>
          </div>
          <div>
            <label for="viruela" class="flex items-center gap-2">
              <input id="viruela" type="checkbox" class="rounded text-av-50 border-av-50 focus:ring-av-100"/>
              Viruela
            </label>
            <label for="Bronquitis Aviar" class="flex items-center gap-2">
              <input id="Bronquitis Aviar" type="checkbox" class="rounded text-av-50 border-av-50 focus:ring-av-100"/>
              Bronquitis Aviar
            </label>
            <label for="Gumboro" class="flex items-center gap-2">
              <input id="Gumboro" type="checkbox" class="rounded text-av-50 border-av-50 focus:ring-av-100"/>
              Gumboro
            </label>
            <label for="New Castle" class="flex items-center gap-2">
              <input id="New Castle" type="checkbox" class="rounded text-av-50 border-av-50 focus:ring-av-100"/>
              New Castle
            </label>
          </div>
          <div class="my-5">
            <button type="submit" class="btn btn-persimmon text-white">Crear lote</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useLots } from "../../use";
import AvInput from "./AvInput.vue";
import AvSelect from "./AvSelect.vue";

export default {

  components: { AvSelect, AvInput },

  setup(props, computed) {

    const type = ref('cautividad');
    const { storeLots } = useLots();

    const store = () => {
      const formData = new FormData(document.getElementById('form'));
      const attributes = {};

      for (let pair of formData.entries()) {
        attributes[pair[0]] = pair[1].trim() === '' ? null : pair[1].trim();
      }

      storeLots(attributes).then(() => computed.emit('created'))
    }

    return { store, type };

  },
}
</script>