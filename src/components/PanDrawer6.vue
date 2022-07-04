<template>
  <v-navigation-drawer v-if="panStore.drawer6" elevation="4" width="350">
    <templatelist @rafraichir="rafraichir" @emit-click-card="clearCan"/>

  </v-navigation-drawer>
</template>

<script>
import {useDrawerPanStore} from "@/stores/useDrawerPan";
import {useTemplate} from "@/stores/useTemplate";
import templatelist from '../components/TemplateListe.vue'
import {onBeforeMount} from "vue";

let tempStore;
export default {
  name: "PanDrawer6",
  components: {
    templatelist
  },
  emits: ['clearCan', 'rafraichir',],

  setup() {
    const panStore = useDrawerPanStore();
    tempStore = useTemplate();
    onBeforeMount(() => {
      tempStore.fetchPosters()
    })
    return {panStore, tempStore}
  },
  data: () => {
    return {
      value: null,
    }
  },

  computed: {
    posters() {
      return tempStore.fetchPosters()
    }
  },
  created() {
    tempStore.fetchPosters();
  },

  methods: {
    rafraichir() {
      return tempStore.posters
    },
    clearCan() {
      this.$emit("clearCan")
    },
  }
}
</script>

<style scoped>
canvas {
  border: 1px solid #999;
}
</style>