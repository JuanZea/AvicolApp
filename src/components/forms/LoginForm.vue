<template>
  <form class="flex justify-center px-6">
    <div class="w-full max-w-xs">
      <h1 class="text-center text-3xl font-lato">Inicia Sesión</h1>

      <div class="grid gap-4 py-4">
        <av-input id="email" label="Correo electrónico" type="text" v-model="email"/>
        <av-input id="password" label="Contraseña" type="password" v-model="password"/>
      </div>

      <div class="flex justify-end">
        <router-link class="btn btn-persimmon text-white mr-4" :to="{name: 'register'}">
          ¡Regístrate!
        </router-link>
        <button @click="login" class="btn btn-dark text-white">Iniciar sesión</button>
      </div>
    </div>
  </form>
</template>

<script>
import AvInput from "./AvInput.vue";
import {ref} from "vue";
import {useAuthentication} from "../../use";
export default {
  name: "LoginForm",
  components: {AvInput},
  setup () {
    const email = ref('');
    const password = ref('');
    const {login: globalLogin} = useAuthentication();
    const login = () => globalLogin(email.value, password.value);
    return {email, password, login}
  }
}
</script>