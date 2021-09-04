<template>
  <div class="h-full flex flex-col lg:flex-row">
    <div class="relative flex p-4 items-center lg:flex-col lg:gap-4">
      <div class="mr-4">
        <avatar class="h-32" :name="editMode ? newName : name" background="ffba08" rounded="true"/>
      </div>
      <div class="flex-grow lg:flex-grow-0">
        <div v-if="!editMode">
          <h1 class="font-bold text-2xl">{{ name }}</h1>
          <div><span class="font-bold text-gray-500">{{ email }}</span></div>
        </div>
        <div v-else class="flex flex-col gap-2">
          <av-input v-model="newName" id="name" type="text" label="Nuevo nombre"/>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row self-start gap-2 ml-4 lg:ml-0 lg:self-end">
        <button v-if="!editMode" @click="editMode = true" class="group items-center flex bg-black p-2 bg-opacity-5 rounded-full bg-opacity-5 hover:bg-opacity-10 lg:rounded lg:py-1">
          <span class="hidden lg:block text-av-100 group-hover:text-av-600 mr-2">Editar</span>
          <fai class="text-av-100 group-hover:text-av-600 animate-wiggle" icon="pencil-alt"/>
        </button>
        <button v-if="editMode" @click="updateUser" class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
          <fai class="text-av-100" :icon="['far', 'check-circle']" size="lg"/>
        </button>
        <button v-if="editMode" @click="editMode = false; newName = name" class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
          <fai class="text-av-100" :icon="['far', 'times-circle']" size="lg"/>
        </button>
      </div>
    </div>
    <div class="bg-blue-500 flex-grow">2</div>
  </div>
</template>

<script>
import {ref} from "vue";
import firebase from "firebase/app";
import Avatar from "../../components/dummies/Avatar.vue";
import AvInput from "../../components/forms/AvInput.vue";

export default {
  components: {AvInput, Avatar},
  setup() {
    const user = firebase.auth().currentUser
    const name = ref(user.displayName);
    const newName = ref(user.displayName);
    const email = ref(user.email);
    const editMode = ref(false);

    const updateUser = () => {
      name.value = newName.value;
      user.updateProfile({
        displayName: name.value,
      });
      editMode.value = false;
    }

    return {name, newName, email, editMode, updateUser}
  }
}
</script>