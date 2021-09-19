<template>
  <div class="flex p-4 items-center lg:flex-col lg:gap-4 h-full">
    <div class="mr-4 lg:mr-0">
      <avatar class="h-32" :name="editMode ? newName : name" background="ffba08" rounded="true"/>
    </div>
    <div class="w-full">
      <div v-if="!editMode">
        <h1 class="font-glory font-bold text-3xl">{{ name }}</h1>
        <div><span class="font-glory text-2xl text-gray-500">{{ email }}</span></div>
      </div>
      <av-input v-else v-model="newName" id="name" type="text" label="Nuevo nombre"/>
    </div>
    <div class="flex flex-col self-start gap-2 ml-4 lg:ml-0 lg:flex-row">
      <button v-if="!editMode" @click="editMode = true"
              class="group items-center flex bg-black p-2 bg-opacity-5 rounded-full bg-opacity-5 hover:bg-opacity-10 lg:rounded lg:py-1">
        <span class="hidden lg:block text-av-100 group-hover:text-av-600 mr-2">Editar</span>
        <fai class="text-av-100 group-hover:text-av-600 animate-wiggle" icon="pencil-alt"/>
      </button>
      <button v-if="editMode" @click="updateUser"
              class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
        <fai class="text-av-100" :icon="['far', 'check-circle']" size="lg"/>
      </button>
      <button v-if="editMode" @click="editMode = false; newName = name"
              class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
        <fai class="text-av-100" :icon="['far', 'times-circle']" size="lg"/>
      </button>
    </div>
    <div class="flex-grow flex-col h-full justify-end hidden md:flex">
      <img class="object-contain max-h-48 w-full" src="/src/assets/illustrations/my-account.svg">
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "../use";
import Avatar from "./dummies/Avatar.vue";
import AvInput from "./forms/AvInput.vue";
import {updateProfile} from "firebase/auth";

export default {
  components: {AvInput, Avatar},
  setup() {
    const {state} = useStore();
    const name = ref(state.user.displayName);
    const newName = ref(state.user.displayName);
    const email = ref(state.user.email);
    const editMode = ref(false);

    const updateUser = () => {

      name.value = newName.value;
      updateProfile(state.user, {
        displayName: name.value,
      });
      editMode.value = false;
    }

    return {name, newName, email, editMode, updateUser}
  }
}
</script>