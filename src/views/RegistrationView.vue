<template>
 <div class="login-container">
 <v-sheet  class="mx-auto login form">
   <v-form @submit.prevent="register">
     <v-text-field v-model="username" label="Username" class="login-input" required></v-text-field>
     <v-text-field v-model="password" label="Password" type="password" class="login-input" required></v-text-field>
     <v-text-field v-model="password" label="Confirm Password" type="password" class="login-input" required></v-text-field>
     <v-btn type="submit" class="mt-2 login-button">Register</v-btn>
   </v-form>
 </v-sheet>
</div>
</template>


<script>
import { useUserStore } from "../stores/users";

export default {
  data() {
    return {
      store: useUserStore(),
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      try {
        this.store.register(this.username, this.password);
        this.$router.push({ name: "games" });
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped>

.logo {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 250px;
  height: 250px;
  z-index: 1;
}

.login-container form {
  position: absolute;
  top: 500px;
  left: 800px;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
}
.login-container h1 {
 margin-top: 0;
 font-family: Arimo;
}

.login-container form input[type="text"],
.login-container form input[type="password"] {
 width: 100%;
 padding: 8px;
 margin-bottom: 10px;
 font-family: Arimo;
 border: 1px solid #ccc;
 border-radius: 4px;
 box-sizing: border-box;
}

.login-container form button[type="submit"] {
 width: 100%;
 padding: 8px;
 background-color: #392F5a;
 color: #FFF8F0;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 font-family: Arimo;
}



.login-container form button[type="submit"]:hover {
 background: color #392f70;;
}


</style>