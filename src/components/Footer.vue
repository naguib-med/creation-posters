<template>
  <v-footer absolute app class="d-flex flex-column bg-indigo-darken-4 mb-0" style="bottom: 0;" width="100%">
    <div class="pa-2">
      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            class="mx-4 text-white"
            icon="fa-brands fa-instagram"
            size="large"
            v-bind="props"
            variant="text"
        ></v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            class="mx-4 text-white"
            icon="fa-brands fa-linkedin"
            size="large"
            v-bind="props"
            variant="text"
        ></v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            class="mx-4 text-white"
            icon="fa-brands fa-twitter"
            size="large"
            v-bind="props"
            variant="text"
        ></v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
            :style="{ 'background-color': isHovering ? '#e63946' : '' }"
            class="mx-4 text-white"
            icon="fa-brands fa-facebook"
            size="large"
            v-bind="props"
            variant="text"
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
export default {
  name: 'Footer',
  data: () => ({}),
};
</script>


<style scoped>

</style>
