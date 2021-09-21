<template>
  <div>
    <div class="flex-grow">
      <div class="p-4">
        <form id="form" @submit="store" class="flex flex-col md:px-5">
          <div class="mt-3">
            <av-input id="name" label="Nombre:"/>
          </div>
          <div class="mt-3">
            <av-select id="type" label="Tipo:">
              <option class="bg-av-50 bg-opacity-10" value="0">Galpón</option>
              <option class="bg-av-50 bg-opacity-10" value="1">Cautividad</option>
              <option class="bg-av-50 bg-opacity-10" value="2">Gallinas Felices</option>
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
import AvInput from "../../../components/forms/AvInput.vue";
import AvSelect from "../../../components/forms/AvSelect.vue";
import {useBarns} from "../../../use";

export default {
  components: {AvSelect, AvInput },
  setup(props, computed) {

    const { storeBarns } = useBarns();

    const store = (event) => {
      event.preventDefault();
      const formData = new FormData(document.getElementById('form'));
      const attributes = {};

      for (let pair of formData.entries()) {
        attributes[pair[0]] = pair[1].trim() === '' ? null : pair[1].trim();
      }

      storeBarns(attributes).then(() => computed.emit('created'))
    }

    return { store };

  },
}
</script>