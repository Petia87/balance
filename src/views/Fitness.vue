<template>
  <v-main class="green">
    <h1 class="display-5" id="title_second">Welcome to Healthy Balance</h1>
    <h2 id="title_" class="mb-5">Calories counter</h2>

    <v-layout row wrap>
      <v-responsive width="100%" height="490px" class="white">
        <v-img width="430" class="wallpaper" src="pic2.jpg"></v-img>
        <h2 id="title__">The easyest way to reach your healthy goal</h2>
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
        <v-container class="p5">
          <v-card class="text-xs-center card_pic">
            <v-responsive class="p5">
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

#title_second {
  text-align: center;
  color: white;
  margin: 0 auto;
  font-size: 3rem;
}
#title_ {
  text-align: center;
  color: white;
  margin: 0 auto;
  font-size: 2.3rem;
}
#title__{
  text-align: center;
  color:green;
  margin: 0 auto;
  font-size: 1.5rem;
}
.card_pic {
  width: 80%;
  height: 60%;
  padding: 0;
}
</style>
<script>
export default {
  data: () => {
    return {
      cards: [
        {
          name: "Loem",
          par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-1.jpg",
        },
        {
          name: "Loremfh",
          par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-2.jpg",
        },
        {
          name: "Loremky",
          par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-3.jpg",
        },
        {
          name: "Loremsa",
          par: "Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-4.jpg",
        },
        {
          name: "Loremkt",
          par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-5.jpg",
        },
        {
          name: "Loremlk",
          par: "Lorem ipsum dolor amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis amet consectetur amet consectetur  ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-6.jpg",
        },
        {
          name: "Loremr",
          par: "Lorem amet consectetur amet consectetur  ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-7.jpg",
        },
        {
          name: "Lorem",
          par: "Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Explicabo perferendis, sint nostrum blanditiis sapiente eos natus at nobis iure ea sit! In inventore odit ex recusandae animi non libero dicta",
          avatar: "avatar-8.jpg",
        },
      ],
    };
    
    
  },
};
</script>