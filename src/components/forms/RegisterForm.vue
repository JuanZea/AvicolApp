<template>
  <div class="flex justify-center px-6">
    <div class="w-full max-w-xs">
      <h1 class="text-center text-3xl font-lato">Crear cuenta</h1>

      <div class="grid gap-4 py-4">
        <av-input id="name" label="Nombre" type="text" v-model="name"/>
        <av-input id="email" label="Correo electrónico" placeholder="Ejemplo@email.com" type="text" v-model="email"/>
        <div class="flex gap-4">
          <av-input id="password" label="Contraseña" type="password" v-model="password"/>
          <av-input id="confirmPassword" label="Confirmar Contraseña" type="password" v-model="confirmPassword"/>
        </div>
      </div>

      <div class="flex justify-end">
        <router-link class="btn btn-persimmon text-white mr-4" :to="{name: 'login'}">
          <fas icon="arrow-left" class="mr-2"/>
          Volver
        </router-link>
        <button @click="register" class="btn btn-dark text-white">Crear cuenta</button>
      </div>
    </div>
  </div>
</template>

<script>
import AvInput from "./AvInput.vue";
import {ref} from "vue";
import {useAuthentication} from "../../use";
export default {
  components: {AvInput},
  setup () {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const {register: globalRegister} = useAuthentication();
    const register = () => globalRegister(name.value, email.value, password.value);
    return {name, email, password, confirmPassword, register}
  }
}
</script>