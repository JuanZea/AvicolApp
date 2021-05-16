<template>
  <div class="h-screen flex justify-center">
    <div class="flex bg-palette-10 rounded-b-full shadow-2xl mb-32 px-20">

<!--      <div class="fixed z-30">-->
<!--        <div class="bg-palette-90 rounded-full shadow flex py-1 pr-5 w-80 justify-end items-center gap-5 mt-7">-->
<!--          <span class="text-palette-10 font-lobster text-5xl">AvicolApp</span>-->
<!--          <img class="h-20" src="/src/assets/logos/avicolapp-icon.svg" alt="Avicolapp logo">-->
<!--        </div>-->
<!--      </div>-->

      <div class="justify-center items-center bg-white shadow-md">

        <label class="input w-full">
          <input class="input-field shadow-lg" type="text" placeholder=" "/>
          <span class="input-label">Nombre</span>
        </label>

        <label class="input w-full" style="background: white">
          <input class="input-field shadow-lg" type="text" placeholder=" "/>
          <span class="input-label">Email</span>
        </label>

        <label class="input w-full" style="background: white">
          <input class="input-field shadow-lg" type="text" placeholder=" "/>
          <span class="input-label">Contraseña</span>
        </label>

        <label class="input w-full" style="background: white">
          <input class="input-field shadow-lg" type="text" placeholder=" "/>
          <span class="input-label">Confirmar contraseña</span>
        </label>
        <button class="btn btn-base self-end ripple" @click="goToDashboard" style="background: #03071E; color: white">
          Crear cuenta
        </button>

      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "Register"
}
</script>