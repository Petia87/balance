<template>
  <v-main class="green">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 class="mb-200">
        <v-text-field
          outlined
          label="Search"
          prepend-inner-icon="mdi-magnify"
          dark
          color="green darken-2"
          >Search</v-text-field
        >
        <v-btn @click="onSearchFood">search</v-btn>
      </v-flex>
    </v-layout>
  </v-main>
</template>


<script>
import { searchFoodAxios } from "../components/services/api";
export default {
  data: () => ({
    //search: "",
    food: null,
  }),
  /*methods: {
    onSearchFood() {
      searchFoodAxios()
        .then((response) => {
          this.foodItemsInSuccess = true;
          console.log(response.data);
        })
        .catch(() => {
          this.foodItemsInError = true;
        });
    },
  },*/
  methods: {
    onSearchFood() {
      //console.log( searchFoodAxios(this.food));
      searchFoodAxios().then((response) => {
        console.log(this.food);
        console.log(response.data);
        
      });
    },
  },
};
</script>