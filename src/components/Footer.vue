<template>
  <v-footer dark padless>
    <v-card class="flex green darken-1 white--text text-left" flat tile>
     

      <v-card-title size="30px">
       <v-toolbar-title
        > <strong class="subheading"><v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Healthy<span class="light yellow--text">Balance</span>
      </strong>
        </v-card-text></strong></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

     
    </v-card>
  </v-footer>
</template>
      



<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>