<template>
  <v-data-table
    :headers="headers"
    :items="foods"
    :search="search"
    sort-by="description"
    class="elevation-1"
  >
    <v-spacer></v-spacer>
    <template v-slot:top>
      <v-toolbar dark color="green darken-3" class="mb-1">
        <v-text-field
          v-model="search"
          @keyup.enter="onSearch2Food()"
          clearable
          flat
          solo-inverted
          hide-detail
          prepend-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>

        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-spacer></v-spacer>
          <v-select
            v-model="sortBy"
            flat
            solo-inverted
            hide-details
            :items="keys"
            prepend-inner-icon="mdi-magnify"
            label="Sort by"
          ></v-select>
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="sortDesc" mandatory>
            <v-btn large depressed color="green" :value="false">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn large depressed color="green" :value="true">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-toolbar>

      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <!--New Item-->
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="yellow" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
            <!--New Item-->

            <!--GET-->
            <v-btn color="green" dark class="mb-2" @click="onSearch2Food()">
              Search2
            </v-btn>
            <v-btn color="green" dark class="mb-2" @click="onGetFood()">
              Get
            </v-btn>
            <!--GET-->
            <!--Table-->
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Food name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.date"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-2" text @click="close"> Cancel </v-btn>
              <v-btn color="green darken-2" text @click="save"> Save </v-btn>
              <v-btn color="green darken-2" text @click="onfoodItems()">
                Send
              </v-btn>
              <v-alert v-if="foodItemsInSuccess" type="success"
                >foodItems in success</v-alert
              >
              <v-alert v-if="foodItemsInError" type="error"
                >foodItems in error</v-alert
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteAll">OK</v-btn>
         
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!--Item-->
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="green" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
//////////////////////////////////////
import { foodItemsAxios } from "../components/services/api";
import { getFoodAxios } from "../components/services/api";
import { searchFoodAxios } from "../components/services/api";
import { deleteFoodAxios } from "../components/services/api";
export default {
  data: () => ({
    foodItemsInSuccess: false,
    foodItemsInError: false,
    dialog: false,
    dialogDelete: false,
    search: "",
    search2: "",
    searchFood: "",
    foodsName: "",
    foodName: "",
    filter: {},
    sortDesc: false,
    sortBy: "name",
    headers: [
      {
        text: "Food name (100g)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Description", value: "description" },
      { text: "Calories ", value: "calories" },
      { text: "Date", value: "date" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    keys: ["id", "Name", "description", "calories", "date"],
    foods: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      description: 0,
      calories: 0,
      date: "",
    },
    defaultItem: {
      name: "",
      description: 0,
      calories: 0,
      date: "",
    },
  }),

  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    ////////////////////////////////////////////////////////
    //Axios
    onfoodItems() {
      foodItemsAxios(
        this.editedItem.name,
        this.editedItem.description,
        this.editedItem.calories
      )
        .then(() => {
          this.foodItemsInSuccess = true;
        })
        .catch(() => {
          this.foodItemsInError = true;
        });
    },

    onGetFood() {
      getFoodAxios().then((response) => {
        this.foods = response;

        for (const itemOBj of this.foods) {
          console.log(itemOBj);
          console.log(itemOBj.name);
          console.log(this.searchFood);
          /* if (itemOBj.name === this.searchFood) {
            this.foodsName = itemOBj;
          } else {
            // alert("Not found")
          }*/
        }
        /*this.foodsName=this.foods.find((name) => {
              console.log(name);
        return  this.foods.name === this.searchFood;
      });
           console.log(this.foods.name  );
           console.log(this.searchFood  );*/
        return response;
      });
    },

    /*onSearch() {
      this.searchFood = this.search;
      console.log(this.searchFood);
      console.log(this.foodName);
      console.log(this.search);
    },*/

    onSearch2Food() {
      this.searchFood = this.search;
      searchFoodAxios().then((response) => {
        this.foods = response;
        this.food = this.foods.find((food) => {
          return food.name === this.searchFood;
        });
        console.log(this.food);
      });
    },

   deleteAll() {
      this.deleteItemConfirm()
       this.onDeleteFood(food);
    },

    onDeleteFood(food) {
      deleteFoodAxios(food)
       /* .then((response) => {
        this.foods= response.splice({id},1)
          this.foods.splice(this.editedIndex, 1);
          console.log( response);
        })
        .catch(() => {
          this.foodItemsInError = true;
        });
        .then((response) => console.log(response))
        .catch(() => (this.foodItemsInError = true));
      const index = this.foods.indexOf(food);
      this.foods.splice(index, 1);*/
    },

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },

    editItem(item) {
      this.editedIndex = this.foods.indexOf(item);
      //this.editedItem={...item}
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.foods.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.foods.splice(this.editedIndex, 1);
      this.closeDelete();
      this.onDeleteFood();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.foods[this.editedIndex], this.editedItem);
      } else {
        this.foods.push(this.editedItem);
      }
      this.close();
    },
    initialize() {
      console.log("Iiniiiiii");
    },
  },
};
/*  @keyup.enter="onSearch"

 <!--Search2-->
      <template>
        <v-text-field
          v-model="search2"
          @keyup.enter="onSearch2Food()"
          clearable
          flat
          solo-inverted
          hide-detail
          prepend-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
        <v-btn color="green" dark class="mb-2" @click="onSearch2Food()">
          Search2
        </v-btn>
      </template>
      <!--Search2-->
*/
</script>