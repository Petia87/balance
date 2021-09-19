<template>
  <v-app id="app">
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-toolbar flat color="white">
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on"
                  >New Item</v-btn
                >
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="editedItem.name"
                          label="name"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="editedItem.description"
                          label="description"
                        ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="editedItem.calories"
                          label="calories"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table :headers="headers" :items="serverDatas">
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.description }}</td>
              <td class="text-xs-left">{{ props.item.calories }}</td>
              
              <td class="justify-center layout px-0">
                <v-btn small color="aqua" @click="editItem(props.item)">
                  edit
                </v-btn>
                <v-btn small color="error" @click="deleteItem(props.item)">
                  delete
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      isCreate: true,
      editedItem: {
        id: 0,
        name: "",
        description: 0,
        calories:0,
      },
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "name",
          value: "name",
        },
        {
          text: "description",
          value: "description",
        },
        {
          text: "calories",
          value: "calories",
        },
        {
          text: "delete",
          value: "delete",
          sortable: false,
        },
      ],
      serverDatas: [],
    };
  },
  computed: {
    formTitle() {
      return this.isCreate ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  methods: {
    deleteItem(item) {
      confirm("delete") && this.deleteUser(item);
    },
    editItem(item) {
      this.isCreate = false;
      this.editedItem = item;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    save() {
      if (!this.isCreate) {
        this.update();
      } else {
        this.create();
      }
      this.dialog = false;
    },
    
    create() {
      axios
        .post("https://health-balance-api.herokuapp.com/api/food-items", {
          name: this.editedItem.name,
          description: this.editedItem.description,
          calories:this.editedItem.calories,
        })
        .then((response) => this.serverDatas.unshift(response.data))
        .catch((error) => alert(error));
    },
    deleteUser(item) {
      axios
        .delete("https://health-balance-api.herokuapp.com/api/food-items" + item.id)
        .then((response) => console.log(response))
        .catch((error) => alert(error));
      const index = this.serverDatas.indexOf(item);
      this.serverDatas.splice(index, 1);
    },
  },
  created() {
    axios
      .get("https://health-balance-api.herokuapp.com/api/food-items")
      .then((res) => {
        this.serverDatas = res.data;
      })
      .catch((e) => {
        alert(e);
      })
      .finally(() => {
        
      });
  },
}
</script>

