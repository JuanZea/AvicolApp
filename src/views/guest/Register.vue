<template>
  <div class="h-screen flex justify-center bg-img-register">
    <div class="fixed top-0 left-0 m-4">
      <router-link :to="{ name: 'login' }">
        <fas class="text-av-100 h-12 cursor-pointer hvr-grow" icon="arrow-circle-left"/>
      </router-link>
    </div>

    <div class="flex bg-av-10 rounded-b-full shadow-2xl mb-3 py-7 p-11">

      <div class="flex flex-col items-center space-y-3">

        <div>
          <div class="bg-av-90 rounded-full shadow flex py-1 pr-5 w-80 justify-end items-center gap-5">
            <span class="text-av-10 font-lobster text-5xl">AvicolApp</span>
            <img class="h-20" src="/src/assets/logos/avicolapp-icon.svg" alt="Avicolapp logo">
          </div>
        </div>

        <div class="w-full max-w-xs">
          <div><label class="font-bold">Nombre</label></div>
          <label class="mdc-text-field h-9 mdc-text-field--outlined mdc-text-field--no-label txf-primary shadow-md w-full bg-white rounded">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input v-model="name" class="mdc-text-field__input" type="text" aria-label="Label">
          </label>
        </div>

        <div class="w-full max-w-xs">
          <div><label class="font-bold">Correo electrónico</label></div>
          <label class="mdc-text-field h-9 mdc-text-field--outlined mdc-text-field--no-label txf-primary shadow-md w-full bg-white rounded">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input v-model="email" class="mdc-text-field__input" type="email" aria-label="Label">
          </label>
        </div>

        <div class="w-full max-w-xs">
          <div><label class="font-bold">Contraseña</label></div>
          <label class="mdc-text-field h-9 mdc-text-field--outlined mdc-text-field--no-label txf-primary shadow-md w-full bg-white rounded">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input v-model="password" class="mdc-text-field__input" type="password" aria-label="Label">
          </label>
        </div>

        <div class="w-full max-w-xs">
          <div><label class="font-bold">Confirmar contraseña</label></div>
          <label class="mdc-text-field h-9 mdc-text-field--outlined mdc-text-field--no-label txf-primary shadow-md w-full bg-white rounded">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input v-model="confirmPassword" class="mdc-text-field__input" type="password" aria-label="Label">
          </label>
        </div>

        <div class="w-full max-w-xs flex justify-center">
          <button @click="register" class="btn btn-dark text-white">
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useAuthentication} from "../../use";

export default {
  setup() {
    const name = ref();
    const email = ref();
    const password = ref();
    const confirmPassword = ref();
    const {register: globalRegister} = useAuthentication();
    const register = () => globalRegister(name.value, email.value, password.value);
    return {name, email, password, confirmPassword, register}
  }
}
</script>