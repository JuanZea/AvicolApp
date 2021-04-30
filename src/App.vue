<template>
  <p>
    <router-link :to="{ name: 'login' }">Go to Login</router-link>
    <router-link :to="{ name: 'register' }">Go to Register</router-link>
    <router-link :to="{ name: 'home' }">Go to Home</router-link>
    <router-link :to="{ name: 'createSettlements' }">Go to Create settlements</router-link>
    <router-link :to="{ name: 'indexSettlements' }">Go to Index settlements</router-link>
    <router-link :to="{ name: 'createBarns' }">Go to Create barns</router-link>
    <router-link :to="{ name: 'indexBarns' }">Go to Index barns</router-link>
    <router-link :to="{ name: 'createLots' }">Go to Create lots</router-link>
    <router-link :to="{ name: 'indexLots' }">Go to Index lots</router-link>
  </p>
  <router-view/>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

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
