<template>
  <div class="h-screen md:grid md:grid-rows-2 bg-img-login md:pt-20">

    <div class="relative md:flex bg-av-100 bg-opacity-20">
      <div class="md:hidden flex justify-center">
        <div class="flex bg-av-50 rounded-b-full shadow-md py-2 px-12 items-center gap-5">
          <span class="font-lobster text-5xl">AvicolApp</span>
          <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">
        </div>
      </div>

      <div class="hidden md:flex absolute -top-10 bg-av-50 rounded-r-full shadow-md py-2 pr-4 w-80 justify-end items-center gap-5">
        <span class="font-lobster text-5xl">AvicolApp</span>
        <img class="h-20" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">
      </div>

      <div class="hidden md:flex items-center bg-av-50 rounded-br-full w-1/2">
        <div class="w-2/3 self-end ml-4">
          <img src="/src/assets/illustrations/Illustration-login.svg" class="object-contain w-full">
        </div>
      </div>

      <div class="flex flex-col justify-center items-center w-full md:w-1/2 p-20">
        <h1 class="text-3xl font-bold mb-4">Inicio de sesión</h1>

        <div class="w-full max-w-xs mb-2">
          <label for="email" class="self-start text-sm font-medium text-gray-700">Correo Electrónico</label>
          <div class="mt-1">
            <input v-model="email" type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">
          </div>
        </div>

        <div class="w-full max-w-xs mb-4">
          <label for="email" class="self-start text-sm font-medium text-gray-700">Contraseña</label>
          <div class="mt-1">
            <input v-model="password" type="password" name="password" id="password" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
          </div>
        </div>

        <div class="flex justify-between w-full max-w-xs">
          <router-link class="btn btn-dark text-white" :to="{ name: 'register' }">
            Registrate
          </router-link>
          <button @click="login" class="btn btn-persimmon text-white">Iniciar sesión</button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 p-4">
      <div class="shadow rounded-lg p-4 bg-green-500">1
        <fas class="text-av-100" icon="edit"/>
      </div>
      <div class="shadow rounded-lg p-4 bg-green-500">2

      </div>
      <div class="shadow rounded-lg p-4 bg-green-500">3

      </div>
    </div>

    <!--    <div class="row-start-1 row-span-3 grid grid-cols-10 pt-16 font-lato">-->
    <!--      &lt;!&ndash; BIG ORANGE STAMP &ndash;&gt;-->
    <!--      <div class="col-span-6 hidden h-full w-full justify-around bg-av-100 rounded-r-full shadow-lg lg:flex pr-5 w-80">-->

    <!--        <img class="self-end ml-4 h-70 1xl:h-full 1xl:pt-16" src="/src/assets/illustrations/Illustration-login.svg" alt="Login illustration">-->

    <!--        <div class="flex items-center justify-center self-center">-->
    <!--          <svg height="165" width="165">-->
    <!--            <circle cx="82" cy="82" r="82" fill="white"/>-->
    <!--          </svg>-->

    <!--          <svg height="165" width="165" class="absolute">-->
    <!--            <circle cx="82" cy="82" r="62" fill="#FFBA08"/>-->
    <!--          </svg>-->

    <!--          <svg height="165" width="165" class="absolute">-->
    <!--            <circle cx="82" cy="82" r="42" fill="white"/>-->
    <!--          </svg>-->

    <!--          <router-link class="absolute btn btn-dark text-white" :to="{ name: 'register' }">-->
    <!--            Registrate-->
    <!--          </router-link>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-span-4 flex flex-col gap-7 justify-center items-center">-->
    <!--        <div class="w-full max-w-xs">-->
    <!--          <label for="email" class="block text-sm font-medium text-gray-700">email</label>-->
    <!--          <div class="mt-1">-->
    <!--            <input v-model="email" type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="w-full max-w-xs">-->
    <!--          <label for="password" class="block text-sm font-medium text-gray-700">password</label>-->
    <!--          <div class="mt-1">-->
    <!--            <input v-model="password" type="password" name="password" id="password" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="w-full max-w-xs flex justify-end">-->
    <!--          <button @click="login" class="btn btn-persimmon text-white">Iniciar sesión</button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="row-span-2 grid grid-cols-3">-->
    <!--      <div class="grid grid-cols-12 items-center">-->
    <!--        <div class="col-span-3 flex justify-center">-->
    <!--          <fas class="h-16 text-red-500 shadow-2xl rounded-full p-1" icon="edit"/>-->
    <!--        </div>-->
    <!--        <p class="col-span-9">Con AvicolApp queremos ofrecerte comodidad a la hora de gestionar tus actividades.</p>-->
    <!--      </div>-->

    <!--      <div class="grid grid-cols-12 items-center">-->
    <!--        <div class="col-span-3 flex justify-center">-->
    <!--          <fas class="h-16 text-av-100 shadow-2xl rounded-full p-1" icon="hand-holding-heart"/>-->
    <!--        </div>-->
    <!--        <p class="col-span-9">Tus gallinas van a estar más seguras con la creación, actualización y eliminación de galpones, asentamientos y lotes.</p>-->
    <!--      </div>-->

    <!--      <div class="grid grid-cols-12 items-center">-->
    <!--        <div class="col-span-3 flex justify-center">-->
    <!--          <fas class="h-16 text-av-100 shadow-2xl rounded-full p-1" icon="hand-holding-heart"/>-->
    <!--        </div>-->
    <!--        <p class="col-span-9">Garantizamos efectividad en el manejo de los datos para tener información actualizada y pertinente.</p>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {ref} from "vue";
import {useAuthentication} from "../../use";

export default {
  setup() {
    const email = ref();
    const password = ref();
    const {login: globalLogin} = useAuthentication();
    const login = () => globalLogin(email.value, password.value);
    return {email, password, login}
  }
}
</script>