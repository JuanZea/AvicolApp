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
import AvInput from "../../../components/Forms/AvInput.vue";
import useSettlements from "../../../use/useSettlements";
import { useRouter } from "vue-router";

export default {

  components: { AvInput },

  setup() {

    const router = useRouter();
    const { storeSettlements } = useSettlements();

    const store = (event) => {
      event.preventDefault();
      const formData = new FormData(document.getElementById('form'));
      const attributes = {};

      for (let pair of formData.entries()) {
        attributes[pair[0]] = pair[1].trim() === '' ? null : pair[1].trim();
      }

      storeSettlements(attributes)
        .then(() => {
          if (router.currentRoute.value.name === 'createSettlements') router.push({name: 'home'});
        })
    }

    return { store };

  },
}
</script>