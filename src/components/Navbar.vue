<template>
  <div>
    <v-app-bar app dark color="green" dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        >Healthy<span class="light yellow--text">Balance</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="welcome" v-model="name"
        >{{ welcomeTitle }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down mt-7 px-4">
        <router-link class="px-2 white--text text-decoration-none" to="/">
          Home
        </router-link>

        <router-link
          class="px-2 white--text text-decoration-none user"
          to="/Calculator"
          >Calculator</router-link
        >

        <router-link
          class="px-2 white--text text-decoration-none user"
          to="/Diary"
        >
          Diary</router-link
        >
         <router-link
          class="px-2 white--text text-decoration-none user"
          to="/MyDiary"
        >
          MyDiary</router-link
        >

        <router-link
          class="px-2 white--text text-decoration-none user"
          to="/Fitness"
          >Fitness
        </router-link>

        <router-link
          class="px-2 white--text text-decoration-none user"
          to="/Nutrition"
          >Nutrition
        </router-link>
        <router-link
          class="px-2 white--text text-decoration-none user"
          to="Searc"
          >Searc
        </router-link>
      </v-toolbar-items>
      <div>
        <v-btn icon class="mx-7">
          <v-icon>"mdi-magnify"</v-icon>
          <span class="caption"
            ><router-link
              class="white--text text-decoration-none text-transform-none"
              to="/Search"
            ></router-link
          ></span>
        </v-btn>
        <v-btn icon class="mx-7 login">
          <v-icon>mdi-account</v-icon>
          <span class="caption"
            ><router-link
              class="white--text text-decoration-none text-transform-none guest"
              to="/Login"
              >Login/
            </router-link></span
          >
          <span class="caption"
            ><router-link
              class="white--text text-decoration-none text-transform-none guest"
              to="/SignUp"
              >Register
            </router-link></span
          >
        </v-btn>
      </div>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      dark
      color="green"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link class="white--text text-decoration-none" to="/">
                Home
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link
                class="white--text text-decoration-none"
                to="/Calculator"
                >Calculator</router-link
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link class="white--text text-decoration-none" to="/Diary">
                Diary</router-link
              >
            </v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-title>
              <router-link class="white--text text-decoration-none" to="/MyDiary">
                MyDiary</router-link
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link
                class="white--text text-decoration-none"
                to="/Fitness"
                >Fitness
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link
                class="white--text text-decoration-none"
                to="/Nutrition"
                >Nutrition
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.login {
  text-transform: none;
}
</style>

<script>
import { setUserNavA } from "../components/services/api";
export default {
  data: () => ({
    userExist:false,
    name: "",
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    //Смяна на бутоните//
    setUserNav() {
      setUserNavA();
      if (localStorage.getItem("token") != null) {
        document.getElementsByClassName("user").style.display = "inline-block";
        document.getElementsByClassName("guest").style.display = "none";
        document
          .getElementsByClassName("welcome")
          .replace("Welcome to HP", `Welcome ${this.name}`);
        console.log(this.name);
      } else {
        document.getElementsByClassName("user").style.display = "none";
        document.getElementsByClassName("guest").style.display = "inline-block";
      }
    },
  },
  computed: {
    welcomeTitle() {
      console.log(this.name);
      return this.userExist
        ? `Welcome ${this.name}`
        : "Welcome to HP";
    },
  },
};
/*
v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        links: [
      { icon: home, text: Home, route: "/" },
      { icon: home, text: Calculator, route: "/calculator" },
      { icon: home, text: Diary, route: "/diary" },
      { icon: home, text: Fitness, route: "/fitness" },
      { icon: home, text: Nutrition, route: "/nutrition" },
    ],*/
</script>
