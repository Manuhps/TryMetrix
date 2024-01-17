<template>
  <div class="header">
    <div class="TryMetrix">
      <img src="../assets/Logo_Try.png" alt="TryMetrix logo" />
    </div>
    <div  class="nav-item" :class="{ 'active': $route.path === '/games' }">
      <router-link to="/games" v-if="userStore.isUser">Games</router-link>
    </div>
    <div  class="nav-item" :class="{ 'active': $route.path === '/ranking' }">
      <router-link to="/ranking" v-if="userStore.isUser">Ranking</router-link>
    </div>
    <div  class="nav-item">
      <img class="logout-img" src="../assets/logout_icon.png" v-if="userStore.isUser" @click="logout">
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/users';

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  methods: {
    logout() {
      //Logout and lead into the LandingPage
      this.userStore.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: none;
  color: black;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center; 
  z-index: 1000;
}

.TryMetrix img {
  width: 150px; 
  height: auto;
  display: block;
  margin-right: 10px;
  margin: 0; 
}

.nav-item {
  margin-right: 20px;
  position: relative;
}

.nav-item.active::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 1;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: rgb(255, 0, 0); 
}

a {
  text-decoration: none;
  color: #000;
  font-family: Arimo;;
  font-weight: bold;
  font-size: 16px;
}
.logout-img{
  width: 35%;
  height: auto;
}
</style>
