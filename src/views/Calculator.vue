  <template>
  <v-main class="green">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 class="mb-200">
        <v-card height="100%">
          <v-toolbar dark color="green darken-2">
            <v-toolbar-title>Calculator</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="First Name "
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lastName"
                  :counter="10"
                  :rules="lastNameRules"
                  label="Last Name "
                  outlined
                ></v-text-field>
              </v-col>
              <hr />
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="age"
                  :counter="2"
                  :rules="AgeRules"
                  label="Age"
                  outlined
                ></v-text-field>
              </v-col>
              <hr />
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="height"
                  :counter="3"
                  :rules="heightRules"
                  label="Height (cm) "
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="weight"
                  :counter="3"
                  :rules="weightRules"
                  label="Weight (kg)"
                  outlined
                ></v-text-field>
              </v-col>
              <v-container fluid>
                <h3>Gender</h3>
                <v-radio-group v-model="row" row>
                  <v-radio label="male" value="male"></v-radio>
                  <v-radio label="female" value="female"></v-radio>
                </v-radio-group>
              </v-container>
            </v-row>

            <v-btn
            @click="onCalculate"
              block
              dark
              text-transform:none
              color="green darken-2"
              class="px-100 btn-login ;"
              >Calculate</v-btn
            >
            <v-alert v-if="calculateInSuccess" type="success"
              >Calculate in success</v-alert
            >
            <v-alert v-if="calculateInError" type="error">Calculate in error</v-alert>
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
import { calculateAxios } from "../components/services/api";
export default {
  data: () => ({
    calculateInSuccess: false,
    calculateInError: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    lastName: "",
    lastNameRules: [
      (v) => !!v || "Last Name is required",
      (v) =>
        (v && v.length <= 10) || "Last Name must be less than 10 characters",
    ],
    height: "",
    heightRules: [
      (v) => !!v || "Height is required",
      (v) => (v && v.length <= 4) || "Height must be less than 4 characters",
      (v) => (v>0 ) || "Height must be positive number"
    ],
    weight: "",
    weightRules: [
      (v) => !!v || " Weight is required",
      (v) => (v && v.length <= 4) || " Weight must be less than 4 characters",
      (v) => (v>0 ) || "Height must be positive number"
    ],

    age: "",
    ageRules: [
      (v) => !!v || "Age is required",
      (v) => (v && v.length <= 2) || " Age must be less than 2 characters",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    //Axios
    onCalculate() {
      calculateAxios(this.name, this.lastName,this.height,this.weight,this.age)
        .then(() => {
          this.calculateInSuccess = true;
          
        })
        .catch(() => {
          this.calculateInError = true;
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