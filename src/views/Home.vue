<template>
  <v-main class="green">
    <v-layout row wrap>
      <v-layout app dark color="green" dense>
        <h1 id="title">Welcome to Healthy Balance</h1>
      </v-layout>

      <v-responsive width="100%" height="490px" class="white">
        <v-img width="430" class="wallpaper" src="pic2.jpg">
          <h2 id="title_second">Calories counter</h2></v-img
        >
      </v-responsive>

      <v-flex
        xs12
        sm6
        md4
        lg3
        v-for="card in cards"
        :key="card.name"
        height="100px"
      >
        <v-container>
          <v-card class="text-xs-center card_pic">
            <v-responsive class="pt-10">
              <v-img :src="card.avatar"></v-img>
            </v-responsive>

            <v-card-title>
              <div>{{ card.name }}</div>
            </v-card-title>
            <v-card-subtitle>
              <div>{{ card.par }}</div>
            </v-card-subtitle>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-main>
</template>
<style scoped>
.wallpaper {
  margin: 0 auto;
}
#title {
  color: white;
  font-size: 1.5rem !important;
  margin: 0 auto;
 
}
#title_second {
  color: green;
  margin: 0 auto;
padding-left: 10rem;
 
}
.card_pic {
  width: 80%;
  height: 60%;
}
</style>
<script>
export default {
  data: () => {
    return {
      cards: [
        {
          name: "Loem",
          par: "Loremkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          avatar: "avatar-1.jpg",
        },
        { name: "Loem", par: "Lorem", avatar: "avatar-2.jpg" },
        { name: "Loem", par: "Lorem", avatar: "avatar-3.jpg" },
        { name: "Loem", par: "Lorem", avatar: "avatar-4.jpg" },
        { name: "Loem", par: "Lorem", avatar: "avatar-5.jpg" },
        { name: "Loem", par: "Lorem", avatar: "avatar-6.jpg" },
        { name: "Loem", par: "Lorem", avatar: "avatar-7.jpg" },
        { name: "Loem", par: "Lorem", avatar: "avatar-8.jpg" },
      ],
    };
    /* 
     <v-responsive height="300"> 
           <v-img

          src="https://exceednutrition.com/wp-content/uploads/2015/02/plain-white-background-tumblr-elegant-free-wallpaper-ljlsydkr-2.jpg"
        ></v-img>
        -------------------------------------
    <v-layout row wrap>
        <v-flex xs12 v-for="card in cards" :key="card.name">
          <v-card-flat>
            <v-responsive class="pt-3">
              <v-avatar>
                <img :src="card.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-cartd-text>
              <div>{{ card.name }}</div>
              <div>{{ card.par }}</div>
            </v-cartd-text>
          </v-card-flat>
        </v-flex>
      </v-layout>*/
  },
};
</script>