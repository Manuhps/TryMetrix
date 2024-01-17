<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue'; // Replace with the correct path to your Header component
</script>


<style>
#app {
  width: 100%;
}
</style>