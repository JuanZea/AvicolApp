<template>
  <div class="h-full grid grid-cols-1 lg:grid-cols-2">
    <div class="flex flex-col">
      <div class="flex p-4">
        <div>
          <img class="rounded-lg h-32"
               src="https://ui-avatars.com/api/?name=Alejandro Yarce&background=ffba08&rounded=true&bold=true"
               alt="Avatar image"/>
        </div>
        <div class="ml-8 flex-grow flex items-center">
          <h1 class="font-bold font-lato text-3xl ">Juan Alejandro Yarce Taborda Taborda</h1>
        </div>
      </div>
      <div class="flex-grow">
        <h2 class="ml-4 text-2xl font-bold mb-4">Información Personal</h2>

        <div class="m-4 flex rounded border-dashed border-4 border-av-50">
          <div class="grid grid-cols-2 p-8 pr-16  gap-4">
            <div class="flex flex-col font-bold gap-2 xl:text-xl">
              <span>Nombre:</span>
              <span>Teléfono:</span>
              <span>Dirección:</span>
              <span>Email:</span>
            </div>

            <div class="flex flex-col gap-2 xl:text-xl">
              <span class="break-all">Daniela</span>
              <span class="break-all">3206100477</span>
              <span class="break-all">Cra 40 # 32 D SUR-60</span>
              <span class="break-all">Juan.YTaborda@AdeU.ued.co</span>
            </div>
          </div>
        </div>

        <div class="py-8 w-full h-72">
          <img class="object-cover h-30 sm:h-52 lg:h-64 xl:h-72" src="/src/assets/illustrations/myProfile.svg" alt="My profile illustration">
        </div>
      </div>
    </div>

    <div class="bg-av-200 p-8 flex">
      <div class="flex w-full items-center">
        <div class="w-full">
          <div class="">
            <div class="mb-4">
              <h3 class="text-2xl font-bold">Actualizar información</h3>
              <p class="mt-1 text-xl text-gray-700">
                Completa los datos de tu perfil para optimizar tus actividades.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2 bg-av-200 p-4 font-bold  border-dashed rounded border-4 border-av-900">
            <form action="#" method="POST" >
              <div class="overflow-hidden sm:rounded-md">
                <div class="py-5 bg-white bg-av-200 ">
                  <div class="grid gap-5">


                    <div>
                      <label for="name" class="block xl:text-xl">Nombre</label>
                      <input v-model="name" type="text" name="name" id="name" autocomplete="name" class="xl:text-xl mt-1 focus:ring-indigo-500 w-full md:w-3/4 focus:border-indigo-500 block shadow-sm border-gray-300 rounded-md">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5">
                      <div class="mr-2">
                        <label for="document-type" class="block xl:text-xl">Tipo de documento</label>
                        <select id="document-type" name="document-type" autocomplete="document-type" class="xl:text-xl mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                          <option>Tarjeta de identidad</option>
                          <option>Cédula</option>
                          <option>Cédula de extranjería</option>
                        </select>
                      </div>

                      <div class="">
                        <label for="document" class="block xl:text-xl">Documento</label>
                        <input v-model="document" type="text" name="document" id="document" autocomplete="document" class="xl:text-xl mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md">
                      </div>
                    </div>

                    <!--
                    <div>
                      <label for="email" class="block xl:text-xl">Correo</label>
                      <input v-model="email" type="text" name="email" id="email" autocomplete="email" class="xl:text-xl  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full md:w-2/3  shadow-sm border-gray-300 rounded-md">
                    </div>-->

                    <div>
                      <label for="mobile" class="block xl:text-xl">Celular</label>
                      <input v-model="mobile" type="text" name="mobile" id="mobile" autocomplete="mobile" class="xl:text-xl mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full md:w-2/4 shadow-sm border-gray-300 rounded-md">
                    </div>

                    <div>
                      <label for="address" class="block xl:text-xl">Dirección</label>
                      <input v-model="address" type="text" name="address" id="address" autocomplete="address" class="xl:text-xl mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full md:w-3/4 shadow-sm border-gray-300 rounded-md">
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="text-right mt-4">
            <button @click="update" type="submit" class="btn btn-dark text-white text-xl hover:from-av-800">
              Actualizar
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {usersService} from "../../services/index";
import firebase from "firebase/app";


export default {
  setup() {
    const user = firebase.auth().currentUser
    const id = user.uid;

    const name = ref();
    const document = ref()
    //const email = ref();
    const mobile = ref();
    const address = ref();

    const update = () => usersService.update(id, {
      name: name.value,
      document: document.value,
      //email: email.value,
      mobile: mobile.value,
      address: address.value
    })
    return {name, document, /*email,*/ mobile, address, update}
  }
}
</script>