<template>
<div class="h-screen">

  <div class="fixed justify-center px-96">

      <div class="bg-palette-10 rounded-b-full shadow flex h-96 w-96 grid grid-rows-10">

        <div class="row-span-3">

          <div class="bg-palette-90 rounded-full shadow flex pr-5 h-20 w-80 justify-end items-center gap-5 mt-10 mx-16">
            <span class="font-lobster text-4xl" style="color: #FFBA08">AvicolApp</span>
            <img class="h-20 w-14" src="/src/assets/logos/avicolapp-icon-shadow.svg">
          </div>

        </div>

        <div class="row-span-7">

          <div class="flex flex-col gap-4 px-20 justify-center items-center">

            <label class="input w-full" style="background: white">
              <input class="input-field shadow-lg" type="text" placeholder=" " />
              <span class="input-label">Nombre</span>
            </label>

            <label class="input w-full" style="background: white">
              <input class="input-field shadow-lg" type="text" placeholder=" " />
              <span class="input-label">Email</span>
            </label>

            <label class="input w-full" style="background: white">
              <input class="input-field shadow-lg" type="text" placeholder=" " />
              <span class="input-label">Contraseña</span>
            </label>

            <label class="input w-full" style="background: white">
              <input class="input-field shadow-lg" type="text" placeholder=" " />
              <span class="input-label">Confirmar contraseña</span>
            </label>
            <button class="btn btn-base self-end ripple" @click="goToDashboard" style="background: #03071E; color: white">
              Crear cuenta
            </button>

          </div>

        </div>

      </div>

  </div>

</div>

</template>

<script>
export default {
  name: "Register"
}
</script>