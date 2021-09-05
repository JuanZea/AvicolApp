<template>
  <div class="flex items-center">
    <Menu as="div" class="relative inline-block text-left">
      <div class="flex items-center">
        <MenuButton>
          <avatar class="h-9" :name="'name'" background="ffba08" rounded="true" bold="true"/>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute w-40 right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="p-1">
            <MenuItem v-slot="{ active }">
              <router-link :to="{name: 'myAccount'}" :class="[
                  active ? 'bg-av-50 font-bold' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]">
                <fai :class="{'text-av-50': !active}" class="mr-2" icon="user-alt"/>
                Mi Perfil
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button @click="logout" :class="[
                  active ? 'bg-av-50 font-bold' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]">
                <fai :class="{'text-av-50': !active}" class="mr-2" icon="sign-out-alt"/>
                Cerrar Sesión
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import Avatar from "./dummies/Avatar.vue";
import {useAuthentication} from "../use";

export default {
  components: {
    Avatar,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },
  setup() {
    const {logout} = useAuthentication();
    return {logout}
  }
}
</script>