  <template>
  <v-main class="green">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 class="mb-200">
        <v-card height="100%">
          <v-toolbar dark color="green darken-2">
            <v-toolbar-title>Register Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
             <v-text-field
                v-model="email"
                :counter="10"
                :rules="emailRules"
                label="Email "
                outlined
              ></v-text-field>


              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="First Name "
                outlined
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                :counter="10"
                :rules="lastNameRules"
                label="Last Name "
                outlined
              ></v-text-field>
              
              <v-text-field
                v-model="password"
                :counter="10"
                :rules="passwordRules"
                label="Pasword"
                outlined
              ></v-text-field>
            </v-form>
            <v-btn
              block
              dark
              text-transform:none
              color="green darken-2"
              class="px-100 btn-login ;"
              >Submit</v-btn
            >
            <v-alert v-if="registerInSuccess" type="success"
              >Login in success</v-alert
            >
            <v-alert v-if="registerInError" type="error">Register in error</v-alert>
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
import { registerAxios } from "../components/services/api";
export default {
  data: () => ({
    registerInSuccess: false,
    registerInError: false,
    valid: true,
  

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    lastName: "",
    lastNameRules: [
      (v) => !!v || "Last name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
   
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must be min 5 characters",
      (v) => (v && v.length <= 10) || "Password must be less 10 characters",
    ],
  }),

  methods: {
    //Axios
    onRegister() {
      registerAxios(
        this.name,
        this.lastName,
        this.email,
        this.password
      )
        .then(() => {
          this.registerInSuccess = true;
        })
        .catch(() => {
          this.registerInError = true;
        });
    },
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
