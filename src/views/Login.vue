  <template>
  <v-main class="green">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 class="mb-200">
        <v-card height="100%">
          <v-toolbar dark color="green darken-2">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="username"
                :counter="20"
                :rules="usernameRules"
                label="Username "
                outlined
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :counter="10"
                label="Pasword"
                outlined
              ></v-text-field>
            </v-form>
            <v-btn
              @click="onLogin"
              block
              dark
              text-transform:none
              color="green darken-2"
              class="px-100 btn-login ;"
              >Login</v-btn
            >
            <v-alert v-if="loggedInSuccess" type="success"
              >Login in success</v-alert
            >
            <v-alert v-if="loggedInError" type="error">Login in error</v-alert>
            <v-spacer></v-spacer>
            <v-btn small dark color="green darken-2" class="btn-sign"  @click="onSign">
              <router-link
                class="px-2 white--text text-decoration-none"
                to="/Sign Up"
                >Sign Up</router-link
              ></v-btn
            >

            <span>Forgot Your Password</span>
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
.btn-sign {
  margin-right: 2rem;
  text-transform: none;
}
</style>
<script>
//import { login} from "../components/services/api";
import { loginAxios } from "../components/services/api";
export default {
  data: () => ({
    loggedInSuccess: false,
    loggedInError: false,
    valid: true,
    username: "",
    usernameRules: [
      (v) => !!v || "Username is required",
      (v) => (v && v.length >= 5) || "Username must be min 5 characters",
      (v) => (v && v.length <= 20) || "Username must be less 20 characters",
    ],
    password: "",
    passwordRules: [
      
      (v) => !!v || "Password is required",
       (v) => (v && v.length >= 5 ) || "Password must be min 5 characters",
       (v) => (v && v.length <= 10 ) || "Password must be less 10 characters",
   
    ],
  }),

  methods: {
    onSign(){

    },
    //Axios
    onLogin() {
      loginAxios(this.username, this.password)
        .then(() => {
          this.loggedInSuccess = true;
          this.username = "";
          this.password = "";
        })
        .catch(() => {
          this.loggedInError = true;
        });
    },

    //Fetch
    /*onLogin() {
      login("", "")
        .then(() => {
          this.loggedInSuccess = true;
        })
        .catch(() => {
          console.loggedInError = true;
        });
    },
    //Axios2
    onLogin() {
      loginAxios("", "")
        .then((user) => {
          console.log(user);
          this.loggedInSuccess = true;
        })
        .catch(() => {
          this.loggedInError = true;
        });
    },*/

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
/*<v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="purple">
          <v-toolbar-title>Login Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="login"
              label="Login"
              id="login"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Password"
              id="password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="pink">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> */

/*
  .........................diary.................
      <v-expansion-panel-content v-for="food in foods" :key="food.name">
        <div slot="food">{{ food.name }}</div>
        <v-card>
          <v-card-text class="px-4 grey--text">
            <div class="fond-weight-bold">
              Carbohydrates (Grams){{ food.grams }}
            </div>
            <div class="fond-weight-bold">Calories{{ food.calorie }}</div>

            <div>due by{{ food.due }}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foods: [
        {
          name: "Apple (1 medium)",
          grams: "26",
          calorie: "208",
          due: "1 Aug 2021",
        },
        {
          name: "Banana (1 medium)",
          grams: "28",
          calorie: "308",
          due: "2 Aug 2021",
        },
        {
          name: "Apple (1 medium)",
          grams: "26",
          calorie: "208",
          due: "3 Aug 2021",
        },
        {
          name: "Banana (1 medium)",
          grams: "28",
          calorie: "308",
          due: "4 Aug 2021",
        },
        {
          name: "Apple (1 medium)",
          grams: "26",
          calorie: "208",
          due: "5 Aug 2021",
        },
      ],
    };
  },
};
*/
</script>
