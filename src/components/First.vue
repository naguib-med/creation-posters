<template>
  <v-container class="pt-5" fluid>
    <v-carousel
        class="rounded-xl"
        cycle
        height="500"
        hide-delimiter-background
        show-arrows="hover"
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"

      >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'Rapide',
      'Efficace'
    ],
  }),
}
</script>

<style>

</style>