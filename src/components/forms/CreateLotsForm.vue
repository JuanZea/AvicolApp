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
            <div :for="vaccine.name" v-for="vaccine in vaccines" class="flex items-center gap-3 capitalize">
              <input v-model="vaccine.check" type="checkbox" class="rounded text-av-50 border-av-50 focus:ring-av-100"/>
              {{vaccine.name}}
            </div>
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

    const vaccines = ref( [
      { name: 'viruela', check: false },
      { name: 'gumboro', check: false },
      { name: 'newCastle', check: false },
      { name: 'marek', check: false }
    ]);

    const type = ref('cautividad');
    const { storeLots, calculeDate } = useLots();

    const store = () => {
      const formData = new FormData(document.getElementById('form'));
      const attributes = {};

      for (let pair of formData.entries()) {
        attributes[pair[0]] = pair[1].trim() === '' ? null : pair[1].trim();
      }
      attributes.vaccines = vaccines.value.map(vaccine => {
        vaccine.check ? (vaccine.date = calculeDate(vaccine.name)) : {};
        return vaccine;
      });

      storeLots(attributes).then(() => computed.emit('created'))
    }

    return { store, type, vaccines };
  }
}
</script>