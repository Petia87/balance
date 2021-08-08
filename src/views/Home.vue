<template>
  <v-container>
    <v-layout>
      <h1>Home page</h1>
    </v-layout>
    <Login class="mt-5" /> 
    <!-- mt-5означава класът , той просто добавя a margin-top от 48px. -->
  </v-container>
</template>

<script>
  import Login from "../components/Login";

  export default {
    components: {
      Login
    }
  };
</script>