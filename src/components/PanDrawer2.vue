<template>
  <v-navigation-drawer
      v-if="panStore.drawer2"
      elevation="4"
      stateless
      width="350">
    <v-list>
      <h3 class="d-flex justify-center pa-2 ma-5 text-white rounded-xl" style="background: royalblue">Cliquez sur le
        texte</h3>
      <v-list-item>
        <v-btn
            block
            class="rounded-t-xl"
            color="indigo"
            variant="outlined"
            @click="addFigureCir"
        >
          Circle
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
            block
            class="rounded-b-xl "
            color="indigo"
            variant="outlined"
            @click="addFigureRec"
        >
          Rectangle

        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
            block
            class="rounded-t-xl"
            color="indigo"
            variant="outlined"
            @click="addFigureTrig"
        >
          Triangle
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
            block
            class="rounded-b-xl "
            color="indigo"
            variant="outlined"
            @click="addFigureLine"
        >
          Line
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
            block
            class="rounded-xl"
            color="indigo"
            variant="outlined"
            @click="addFigurePoly"
        >
          Polygon
        </v-btn>
      </v-list-item>

      <v-list-item class="mt-5">
        <v-col>
          <v-row class="mb-6"><h3>Modifier la coleur de l'object :</h3></v-row>
          <v-row>
            <div class="form__field">
              <div class="form__input ">
                <v-swatches v-model="color" class="ms-2" inline @click="changeColor"></v-swatches>
              </div>
            </div>
          </v-row>
        </v-col>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {useDrawerPanStore} from "@/stores/useDrawerPan";
import VSwatches from 'vue3-swatches'


export default {
  components: {VSwatches},
  emits: ['addFigureRec', 'addFigureTrig', 'addFigureCir', 'addFigurePoly', 'addFigureLine', 'changeColor'],

  setup() {
    const panStore = useDrawerPanStore()

    return {panStore}
  },
  data: () => ({
    color: '#F64272',
  }),


  methods: {
    addFigureRec() {
      this.$emit("addFigureRec");
    },
    addFigureTrig() {
      this.$emit("addFigureTrig");
    },
    addFigureCir() {
      this.$emit("addFigureCir");
    },
    addFigureLine() {
      this.$emit("addFigureLine");
    },
    addFigurePoly() {
      this.$emit("addFigurePoly");
    },

    changeColor() {
      this.$emit("changeColor", this.color);
    }
  }

}
</script>


<style>

</style>