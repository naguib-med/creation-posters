<template>
  <First/>
  <HeroComponent/>
  <About/>
  <v-footer app class="d-flex flex-column bg-indigo-darken-4 mb-0" style="bottom: 0;" >
    <div class="pa-2">
      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            class="mx-4 text-white"
            icon="fa-brands fa-instagram"
            variant="text"
            size="large"
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            v-bind="props"
        ></v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            class="mx-4 text-white"
            icon="fa-brands fa-linkedin"
            variant="text"
            size="large"
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            v-bind="props"
        ></v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            class="mx-4 text-white"
            icon="fa-brands fa-twitter"
            variant="text"
            size="large"
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            v-bind="props"
        ></v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            class="mx-4 text-white"
            icon="fa-brands fa-facebook"
            variant="text"
            size="large"
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            v-bind="props"
        ></v-btn>
      </v-hover>
    </div>

    <div class="text-white pt-0">
      Suivez-nous sur les réseaux sociaux !!
    </div>

    <v-divider></v-divider>

    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong><span style="color: orange">My Poster</span></strong>
    </div>
  </v-footer>
</template>


<script>
// import Header from "@/components/Header";
import HeroComponent from "@/components/HeroComponent";
import About from "@/components/About";
import First from "@/components/First";
export default {
  components: { First, About, HeroComponent},
  data: () => ({
  }),
}
</script>

<style> *{ text-transform: none !important; }</style>

