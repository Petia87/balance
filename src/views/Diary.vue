<template>

  <v-data-table
    :headers="headers"
    :items="foods"
    :search="search"
    sort-by="grams"
    class="elevation-1"
    
  >
  
    <template v-slot:top>
    
        <v-toolbar
          dark
          color="green darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
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
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="green"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="green"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      
      <v-toolbar
        flat
      >
      <!--CRUD-->
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
           <!--New Item-->
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="yellow"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
<!--New Item-->

<!--Table-->
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Food name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.grams"
                      label="Grams"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
               
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
              <v-btn
                color="green darken-2"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="green darken-2"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!--Item-->
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="green"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
 

</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
        filter: {},
        sortDesc: false,
          sortBy: 'name',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Grams (g)', value: 'grams' },
        { text: 'Calories ', value: 'calories' },
        { text: 'Date', value: 'date' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      keys: [
          'Name',
          'grams',
          'calories',
          'date',
        ],
      foods: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        grams: 0,
        calories: 0,
        date: "",
      },
      defaultItem: {
        name: '',
        grams: 0,
        calories: 0,
        date: "",
      },
    }),

    computed: {
       numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
       nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    
      initialize () {
        this.foods = [
          {
            name: 'Frozen Yogurt',
            grams: 78,
            calories: 60,
            date: "",
            
          },
          {
            name: 'Ice cream sandwich',
            grams: 237,
            calories: 9.0,
            date: "",
            
          },
          {
            name: 'Eclair',
            grams: 262,
            calories: 16.0,
            date: "",
            
          },
          {
            name: 'Cupcake',
            grams: 305,
            calories: 3.7,
            date: "",
            
          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.foods.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.foods.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.foods.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.foods[this.editedIndex], this.editedItem)
        } else {
          this.foods.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>