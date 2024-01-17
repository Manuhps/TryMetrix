import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      { username: "paulo", password: "123"},
      { username: "manu", password: "123"},
      { username: "bruno", password: "123"},
    ],
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    login(username, password) {
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      if (user) {
        this.isUserAuthenticated = true;
        this.user = user;
      } else {
        throw Error("User invalid!");
      }
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
    },
    register(username, password) {
      if (this.users.some((user) => user.username === username)) {
        throw Error("Username is already taken!");
      }

      const newUser = { username, password, type: "user" };
      this.users.push(newUser);
      this.user = newUser;
      this.isUserAuthenticated = true;
    },
  },
});