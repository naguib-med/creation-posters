<template>
  <v-navigation-drawer v-if="panStore.drawer5" elevation="4" width="350">

    <h3 class="mb-5 d-flex justify-center ma-5 pa-3 rounded-xl text-white " style="background: blue"> Importer des
      médias</h3>


    <v-tabs
        v-model="tab"
        class="rounded-tl-xl rounded-br-xl"
        color="primary"
    >
      <v-tab value="one">Images</v-tab>
      <v-tab value="two">Vidéos</v-tab>
      <v-tab value="three">Audio</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="one">
        <v-file-input
            id="image"
            accept="image/*"
            class="ma-5"
            color="deep-purple accent-4"
            counter
            label="Importer image"
            outlined
            show-size
            truncate-length="15"
            @change="importImage"
        >
        </v-file-input>
      </v-window-item>

      <v-window-item value="two">
        <v-file-input
            id="image"
            accept="image/*"
            class="ma-5"
            color="deep-purple accent-4"
            counter
            label="Importer vidéo"
            outlined
            show-size
            truncate-length="15"
            @change="importImage"
        >
        </v-file-input>
      </v-window-item>

      <v-window-item value="three">
        <v-file-input
            id="image"
            accept="image/*"
            class="ma-5"
            color="deep-purple accent-4"
            counter
            label="Importer audio"
            outlined
            show-size
            truncate-length="15"
            @change="importImage"
        >
        </v-file-input>
      </v-window-item>
    </v-window>
  </v-navigation-drawer>
</template>


<script>
import {useDrawerPanStore} from "@/stores/useDrawerPan";

export default {
  name: "PanDrawer5",
  emits: ['importImage'],
  setup() {
    const panStore = useDrawerPanStore();
    return {panStore}
  },

  data: () => ({
    tab: ""
  }),


  methods: {

    importImage(e) {
      this.$emit("importImage", e);
    },
  }
}
</script>

<style scoped>

</style>