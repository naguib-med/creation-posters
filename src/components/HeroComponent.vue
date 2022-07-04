<template>
  <v-container id="content" fluid>
    <v-row class="mb-10">
      <v-col lg="6">
        <h2 class="intro-text">Bienvenue dans notre application. </h2>
        <p class="description" style="font-size: 1.5rem; color: #E65100; "><i>Faites vous plaisir en créant de posters
          avec efficacité et simplecité.</i></p>
        <p class="description" style="text-align: justify">
          <span style="color: #1A237E; font-weight: bold">My Poster</span> est une application qui propose plusieurs
          fonctionnalités telle que la création de posters,
          l'importation d'un poster déjà créé et c'est ça ce qui fait de cette application un atout pour les
          bibliothécaires afin de créer de posters facilement et rapidement pour des événements.
        </p>
        <v-btn class="text-white mr-10" color="#FF7043" @click="goStar">Commencez</v-btn>
        <v-btn color="indigo">
          <v-icon>fa-solid fa-play</v-icon>
          Regarder une vidéo
        </v-btn>
      </v-col>
      <v-col class="ms-auto" lg="6">
        <v-img
            src="../assets/img.jpg"
            width="80%"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "HeroComponent",
  components: {},

  methods: {
    goStar() {
      this.$router.push({path: '/home'})
    }
  }
}
</script>
<style>

#content {
  width: 90%;
  margin-top: 5rem;
}

h2.intro-text {
  font-size: 50px;
  font-weight: bold;
  color: #444;
  font-family: cursive;
}

p.description {
  font-size: 19px;
  margin: 32px 0px;
  font-family: cursive;
  color: #444;
}
</style>