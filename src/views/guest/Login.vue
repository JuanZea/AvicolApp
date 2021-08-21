<template>
  <div class="h-screen grid grid-rows-10 bg-img-login">
    <!-- LITTLE STAMP FIXED -->
    <div class="fixed">
      <div class="bg-palette-10 rounded-r-full shadow flex py-1 pr-5 w-80 justify-end items-center gap-5 mt-7">
        <span class="font-lobster text-5xl">AvicolApp</span>
        <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="Avicolapp logo">
      </div>
    </div>

    <div class="row-span-6 grid grid-cols-10 pt-16">
      <!-- BIG ORANGE STAMP -->
      <div class="col-span-6 hidden h-full w-full justify-around bg-palette-10 rounded-r-full shadow-lg lg:flex pr-5 w-80">

        <img class="self-end ml-4 h-70 1xl:h-full 1xl:pt-16" src="/src/assets/illustrations/Illustration-login.svg" alt="Login illustration">

        <div class="flex items-center justify-center self-center">
          <svg height="165" width="165">
            <circle cx="82" cy="82" r="82" fill="white"/>
          </svg>

          <svg height="165" width="165" class="absolute">
            <circle cx="82" cy="82" r="62" fill="#FFBA08"/>
          </svg>

          <svg height="165" width="165" class="absolute">
            <circle cx="82" cy="82" r="42" fill="white"/>
          </svg>

          <router-link class="absolute" :to="{ name: 'register' }" >
            <button class="btn-secondary mdc-button mdc-button--raised"  @click="goToDashboard">
              <span class="mdc-button__ripple"/>
              <span class="mdc-button__label">Regístrate</span>
            </button>
          </router-link>
        </div>
      </div>

      <div class="col-span-4 flex flex-col gap-7 justify-center items-center">
        <div class="w-full max-w-xs">
          <text-field label="Email"/>
        </div>

        <div class="w-full max-w-xs">
          <text-field label="Password"/>
        </div>

        <div class="w-full max-w-xs flex justify-end">
          <button class="btn-primary mdc-button mdc-button--raised"  @click="goToDashboard">
            <span class="mdc-button__ripple"/>
            <span class="mdc-button__label">Iniciar sesión</span>
          </button>
        </div>
      </div>
    </div>

    <div class="row-span-4 grid grid-cols-3">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-3 flex justify-center">
          <fas class="h-16 text-red-500 shadow-2xl rounded-full p-1" icon="edit"/>
        </div>
        <p class="col-span-9">Con AvicolApp queremos ofrecerte comodidad a la hora de gestionar tus actividades.</p>
      </div>

      <div class="grid grid-cols-12 items-center">
        <div class="col-span-3 flex justify-center">
          <fas class="h-16 text-palette-10 shadow-2xl rounded-full p-1" icon="hand-holding-heart"/>
        </div>
        <p class="col-span-9">Tus gallinas van a estar más seguras con la creación, actualización y eliminación de galpones, asentamientos y lotes.</p>
      </div>

      <div class="grid grid-cols-12 items-center">
        <div class="col-span-3 flex justify-center">
          <fas class="h-16 text-palette-10 shadow-2xl rounded-full p-1" icon="hand-holding-heart"/>
        </div>
        <p class="col-span-9">Garantizamos efectividad en el manejo de los datos para tener información actualizada y pertinente.</p>
      </div>
    </div>

  </div>
</template>

<script>
import { useRouter } from "vue-router";
import TextField from "../../components/TextField.vue";

export default {
  components: {TextField},
  setup() {
    const router = useRouter();
    const goToDashboard = () => {
      router.push({ name: 'home' });
    }

    return { goToDashboard }
  }
}
</script>