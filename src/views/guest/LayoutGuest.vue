<template>
  <div class="h-screen grid grid-rows-12">
    <div class="row-span-8 grid grid-cols-12">
      <div class="col-span-7 hidden md:block">
        <div class="fixed z-30 flex-grow flex w-full items-center justify-between px-6">
          <img class="h-20 mt-6" src="/src/assets/avicolapp-icon-shadow.svg" alt="Avicolapp Icon">
          <button class="btn btn-dark">Registrate</button>
        </div>
        <div class="h-full flex flex-col pt-16">
          <div class="h-full relative">
            <img class="h-full absolute pl-4 pr-12 pt-4 bottom-0" src="/src/assets/illustrations/Illustration-login.svg" alt="Illustration Login">
            <div class="bg-palette-10 h-full rounded-r-full shadow-lg"/>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-5 flex justify-center items-center">
        <div class="w-full max-w-md grid grid-cols-1 gap-7">
          <label class="input">
            <input class="input-field shadow-lg" type="text" placeholder=" " />
            <span class="input-label">Usuario</span>
          </label>

          <label class="input">
            <input class="input-field shadow-lg" type="text" placeholder=" " />
            <span class="input-label">Contraseña</span>
          </label>

          <div class="flex justify-end">
            <button class="btn btn-base">Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row-span-4 grid grid-cols-1 md:grid-cols-3 px-8">
      <div class="py-6 grid grid-cols-3">
        <div class="col-span-1 flex justify-center items-center">
          <hand-holding-heart-solid :format="'h-16 text-palette-10 shadow-2xl rounded-full p-1'"/>
        </div>
        <p class="col-span-2 ml-8 flex items-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus error illo magnam pariatur perspiciatis possimus.</p>
      </div>

      <div class="py-6 grid grid-cols-3">
        <div class="col-span-1 flex justify-center items-center">
          <hand-holding-heart-solid :format="'h-16 text-palette-10 shadow-2xl rounded-full p-1'"/>
        </div>
        <p class="col-span-2 ml-8 flex items-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus error illo magnam pariatur perspiciatis possimus.</p>
      </div>

      <div class="py-6 grid grid-cols-3">
        <div class="col-span-1 flex justify-center items-center">
          <hand-holding-heart-solid :format="'h-16 text-palette-10 shadow-2xl rounded-full p-1'"/>
        </div>
        <p class="col-span-2 ml-8 flex items-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus error illo magnam pariatur perspiciatis possimus.</p>
      </div>
    </div>
  </div>




































<!--  <div class="h-screen flex flex-col">-->
<!--    <div class="h-32 flex justify-between items-center px-8">-->
<!--      <img class="h-28" src="../../assets/logos/avicolappLogo.svg" alt="">-->
<!--      <button class="btn btn-primary">Registrate</button>-->
<!--    </div>-->
<!--    <div class="flex-grow grid grid-cols-2">-->
<!--      <div class="col-start-2 flex justify-center items-center">-->
<!--        <div>-->
<!--          <div class="mb-8">-->
<!--            <label for="user" class="block text-sm font-medium text-gray-700">Usuario</label>-->
<!--            <div class="mt-1">-->
<!--              <input type="text" id="user" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />-->
<!--            </div>-->
<!--          </div>-->

<!--          <div>-->
<!--            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>-->
<!--            <div class="mt-1">-->
<!--              <input type="text" id="password" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="mt-8">-->
<!--            <button class="btn btn-primary">Iniciar sesión</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="h-80">3</div>-->
<!--  </div>-->
</template>

<script>

import Trapeze from "../../components/Trapeze.vue";
import HandHoldingHeartSolid from "../../assets/icons/Hand-holding-heart-solid.vue";

export default {
  components: {HandHoldingHeartSolid, Trapeze },
  setup() {

  }
}
</script>