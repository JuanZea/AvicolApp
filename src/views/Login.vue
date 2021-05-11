<template>
  <div class="h-screen grid grid-rows-10">

    <div class="fixed">
      <div class="bg-palette-10 rounded-r-full shadow flex py-1 pr-5 w-80 justify-end items-center gap-5 mt-7">
        <span class="font-lobster text-5xl">AvicolApp</span>
        <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="Avicolapp logo">
      </div>

    </div>

    <div class="row-span-6 grid grid-cols-10 pt-16">

      <div class="col-span-6 h-full w-full bg-palette-10 rounded-r-full shadow-lg flex py-1 pr-5 w-80 items-center">
        <div class="flex ml-16 items-center">
          <svg height="165" width="165" >
            <circle cx="82" cy="82" r="82" fill="white"/>
          </svg>

          <svg height="165" width="165" class="absolute">
            <circle cx="62" cy="82" r="62" fill="#FFBA08"/>
          </svg>

          <svg height="165" width="165" class="absolute">
            <circle cx="82" cy="82" r="42" fill="white"/>
          </svg>

          <button class="btn btn-dark absolute ml-20">
            Registrate
          </button>
        </div>

        <img class="h-20" src="/src/assets/illustrations/Illustration-login.svg" alt="Login illustration">
      </div>

    </div>

    <div class="row-span-4">

    </div>


  </div>
</template>

<script>
export default {

  setup() {

    console.log('GHOL')

  }

}
</script>