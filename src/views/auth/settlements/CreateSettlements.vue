<template>
  <div>
    <div class="flex-grow">
      <div class="p-4">
        <Form class="flex flex-col md:px-5" @submit="store" :validation-schema="schema">
          <div class="mt-3">
            <av-input name="name" id="name" label="Nombre:"/>
          </div>
          <div class="mt-3">
            <av-input name="location" id="location" label="Localidad:"/>
          </div>
          <div class="mt-3">
            <av-input name="address" id="address" label="Dirección:"/>
          </div>
          <div class="mt-3">
            <av-input name="sea_level" id="sea_level" label="Altura sobre el nivel del mar:"/>
          </div>
          <div class="my-5">
            <button type="submit" class="btn bg-av-100 px-5 rounded-2xl">Crear finca</button>
          </div>
        </Form>
      </div>
      <div class="content-end self-end">
        <div class="flex content-end justify-end h-full max-h-48">
          <img class="object-contain" src="/src/assets/illustrations/form-settlement.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvInput from "../../../components/Forms/AvInput.vue";
import {Form} from "vee-validate";
import * as Yup from "yup";
import useSettlements from "../../../use/useSettlements";


export default {
  name: "CreateSettlements",
  components: {AvInput, Form},
  setup() {
    const {store, errors} = useSettlements();
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      location: Yup.string().required(),
      address: Yup.string().required(),
      sea_level: Yup.string().required(),
    });

    return {
      schema,
      store,
      errors
    };
  },
}
</script>