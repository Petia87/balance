  <template>
  <v-main class="green ">
    <v-layout align-center justify-center >
      <v-flex xs12 sm8 md4 class="mb-200">
        <v-card height="100%" >
          <v-toolbar dark color="green darken-2">
            <v-toolbar-title>Register Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="First Name "
             outlined
              ></v-text-field>

              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Last Name "
               outlined
              ></v-text-field>    
              <v-text-field
                v-model="Email"
                :counter="10"
                :rules="nameRules"
                label="Email "
               outlined
              ></v-text-field>    

               <v-text-field
                v-model="password"
                :rules="password"
                label="Pasword"
               outlined
              ></v-text-field>    

               <v-text-field
                v-model="password"
                :rules="password"
                label="Comfirm Pasword"
               outlined
              ></v-text-field>    

               
             
            </v-form>
            <v-btn block   dark text-transform:none color="green darken-2" class="px-100 btn-login ;">Submit</v-btn>        
             </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-main>
</template>
<style scoped>
.btn-login {
  text-transform: none;
  margin-bottom: 20px;
}
</style>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
