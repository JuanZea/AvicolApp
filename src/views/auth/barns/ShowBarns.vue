<template>
  <div v-if="!barn">CARGANDO</div>
  <div v-else class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6">
    <button @click="router.push({name: 'indexBarns'})"
            class="absolute -top-5 right-0 bg-white px-2 text-3xl text-av-100">
      <fai icon="hand-point-left"/>
    </button>
    <div class="w-full border-b-2 pb-4">
      <div class="flex justify-between">
        <div v-if="!editMode">
          <h1 class="font-glory font-bold text-3xl">{{ barn.name }}</h1>
          <div><span class="font-glory text-2xl text-gray-500">{{ capitalize(lowerCase(barn.type)) }}</span></div>
        </div>

        <av-input v-else v-model="newName" id="name" type="text" label="Nuevo nombre"/>
        <div v-if="!editMode" class="flex self-center gap-2 lg:ml-0">
          <button @click="editMode = true"
                  class="group items-center flex bg-black p-2 bg-opacity-5 rounded-full bg-opacity-5 hover:bg-opacity-10 lg:rounded lg:py-1">
            <span class="hidden lg:block text-av-100 group-hover:text-av-600 mr-2">Editar</span>
            <fai class="text-av-100 group-hover:text-av-600 animate-wiggle" icon="pencil-alt"/>
          </button>
        </div>
        <div class="flex flex-col self-start gap-2 ml-4 lg:ml-0 lg:flex-row" v-else>
          <button @click="updateUser"
                  class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
            <fai class="text-av-100" :icon="['far', 'check-circle']" size="lg"/>
          </button>
          <button @click="editMode = false; newName = name"
                  class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
            <fai class="text-av-100" :icon="['far', 'times-circle']" size="lg"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed} from "vue";
import capitalize from "lodash/capitalize";
import lowerCase from "lodash/lowerCase";
import {useRouter} from "vue-router";
import {barnsService} from "../../../services";

export default {

  setup() {
    const editMode = ref(false);

    const router = useRouter();
    const barn = ref();
    const id = computed(() => router.currentRoute.value.params.id);
    const newName = ref();

    barnsService.one(id.value)
        .then(response => {
          barn.value = response;
          newName.name = barn.value.name;
        })

    return {barn, router, capitalize, lowerCase, editMode, newName}

  }

}
</script>