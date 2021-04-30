<template>
  <p>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'login' }">Go to Login</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'register' }">Go to Register</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'home' }">Go to Home</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'createSettlements' }">Go to Create settlements</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'indexSettlements' }">Go to Index settlements</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'createBarns' }">Go to Create barns</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'indexBarns' }">Go to Index barns</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'createLots' }">Go to Create lots</router-link>
    <router-link class="block mb-2 text-indigo-500" :to="{ name: 'indexLots' }">Go to Index lots</router-link>
  </p>
  <router-view/>
</template>

<script>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
