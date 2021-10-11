<template>
  <div class="flex items-center z-50">
    <Menu as="div" class="relative inline-block text-left">
      <div class="flex items-center">
        <MenuButton title="Alertas">
            <div>
              <span class="absolute top-0 left-3 inline-flex rounded-full h-3 w-3 bg-av-500"/>
              <span class="animate-ping absolute top-0 left-3 inline-flex rounded-full h-3 w-3 bg-av-500"/>
              <fai style="stroke: rgb(208, 0, 0); stroke-width: 50px" class="text-av-200" icon="bell" size="lg"/>
            </div>
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
        <MenuItems class="absolute w-96 right-0 mt-2 font-glory font-medium origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="p-1">
            <MenuItem v-slot="{ active }">
              <div :class="[
                  active ? 'bg-av-50' : 'text-gray-900',
                  'cursor-pointer group flex rounded-md items-center w-full px-2 py-2 bg-opacity-10',
                ]">
              <div class="h-5 w-2 rounded-lg bg-av-50 mr-2"/>
                <span class="font-bold mr-2 whitespace-nowrap">Ejemplo de alerta</span>
                <span class="whitespace-nowrap truncate">Ejemplo de resto de alerta</span>
              </div>
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
import { useAuthentication } from "../use";

export default {

  components: {
    Avatar,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },

  setup() {
    const { logout } = useAuthentication();
    return { logout }
  }
}
</script>