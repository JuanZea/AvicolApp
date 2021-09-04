<template>
  <div class="bg-img-login">
    <div class="container mx-auto flex flex-col min-h-screen">
      <div class="flex flex-col bg-av-100 bg-opacity-20 flex-grow">
        <div class="flex justify-center">
          <div class="flex justify-center">
            <div class="flex bg-av-50 rounded-b-full shadow-md py-2 px-12 items-center gap-5">
              <span class="font-lobster text-5xl">AvicolApp</span>
              <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">
            </div>
          </div>
        </div>

        <div class="flex flex-grow items-center w-full">
          <div class="w-full grid grid-cols-1 md:grid-cols-2 py-8">
            <login-sticker class="ml-8 hidden md:block"/>

            <div class="flex justify-center items-center flex-grow md:col-start-2">
              <div class="w-full">
                <transition name="zlid" mode="out-in">
                  <component :is="registerMode ? 'register-form' : 'login-form'"/>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-av-100 bg-opacity-30 grid gap-6 px-4 py-6 items-center md:py-20 md:grid-cols-3 xl:gap-12 xl:px-12">
        <info-card class="h-full" color="bg-av-50 bg-opacity-70" icon="file-invoice" title="GESTIÓN" desc="Con AvicolApp queremos ofrecerte comodidad a la hora de gestionar tus actividades."/>
        <info-card class="h-full" color="bg-av-50 bg-opacity-70" icon="hand-holding-heart" title="SEGURIDAD" desc="Tus gallinas van a estar más seguras con la creación, actualización y eliminación de galpones, asentamientos y lotes."/>
        <info-card class="h-full" color="bg-av-50 bg-opacity-70" icon="egg" title="EFICIENCIA" desc="Garantizamos efectividad en el manejo de los datos para tener información actualizada y pertinente."/>

        <div class="flex gap-4 justify-center items-center md:hidden">
          <div class="flex flex-col gap-2">
            <span class="font-bold font-lobster text-2xl mx-6">Servisoft</span>
            <button class="btn btn-persimmon text-white">Nosotros</button>
          </div>
          <img src="/src/assets/illustrations/Illustration-login.svg" class="w-1/2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import InfoCard from "../../components/InfoCard.vue";
import LoginForm from "../../components/forms/LoginForm.vue";
import RegisterForm from "../../components/forms/RegisterForm.vue";
import LoginSticker from "../../components/dummies/LoginSticker.vue";
import {useRoute} from "vue-router";

export default {
  components: {RegisterForm, InfoCard, LoginForm, LoginSticker},
  setup() {
    const route = useRoute();
    const registerMode = computed(() => route.name === 'register');
    return {registerMode}
  }
}
</script>