<template>
  <div class="h-screen grid grid-rows-10">

    <div class="fixed z-30">
      <div class="bg-palette-10 rounded-r-full shadow flex py-1 pr-5 w-80 justify-end items-center gap-5 mt-7">
        <span class="font-lobster text-5xl">AvicolApp</span>
        <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="Avicolapp logo">
      </div>

    </div>

    <div class="row-span-6 grid grid-cols-10 pt-16">

      <div class="hidden lg:flex col-span-6 h-full w-full bg-palette-10 rounded-r-full shadow-lg flex pr-5 w-80 relative">
        <div class="flex ml-7 items-center z-30">
          <svg height="165" width="165">
            <circle cx="82" cy="82" r="82" fill="white"/>
          </svg>

          <svg height="165" width="165" class="absolute">
            <circle cx="62" cy="82" r="62" fill="#FFBA08"/>
          </svg>

          <svg height="165" width="165" class="absolute">
            <circle cx="82" cy="82" r="42" fill="white"/>
          </svg>

          <button class="btn btn-dark absolute ml-16 ripple">
            Registrate
          </button>
        </div>

        <img class="pt-4 " src="/src/assets/illustrations/Illustration-login.svg" alt="Login illustration">
      </div>

      <div class="col-span-4 flex flex-col gap-7 px-20 justify-center items-center">
        <label class="input w-full">
          <input class="input-field shadow-lg" type="text" placeholder=" " />
          <span class="input-label">Usuario</span>
        </label>

        <label class="input w-full">
          <input class="input-field shadow-lg" type="text" placeholder=" " />
          <span class="input-label">Contraseña</span>
        </label>

        <button class="btn btn-base self-end ripple" @click="goToDashboard">
          Inicia sesión
        </button>
      </div>

    </div>

    <div class="row-span-4 grid grid-cols-3">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-3 flex justify-center">
          <hand-holding-heart-solid :format="'h-16 text-palette-10 shadow-2xl rounded-full p-1'"/>
        </div>
        <p class="col-span-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea inventore molestiae perferendis sequi sint </p>
      </div>

      <div class="grid grid-cols-12 items-center">
        <div class="col-span-3 flex justify-center">
          <hand-holding-heart-solid :format="'h-16 text-palette-10 shadow-2xl rounded-full p-1'"/>
        </div>
        <p class="col-span-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea inventore molestiae perferendis sequi sint </p>
      </div>

      <div class="grid grid-cols-12 items-center">
        <div class="col-span-3 flex justify-center">
          <hand-holding-heart-solid :format="'h-16 text-palette-10 shadow-2xl rounded-full p-1'"/>
        </div>
        <p class="col-span-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea inventore molestiae perferendis sequi sint </p>
      </div>
    </div>


  </div>
</template>

<script>
import { useRouter } from "vue-router"
import HandHoldingHeartSolid from "../assets/icons/Hand-holding-heart-solid.vue";

export default {

  components: { HandHoldingHeartSolid },

  setup() {

    const router = useRouter();

    const goToDashboard = function () {
      router.push({ name: 'layoutDashboard' });
    }

    return { goToDashboard }

  }

}
</script>