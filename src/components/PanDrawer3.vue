<template>
  <v-navigation-drawer v-if="panStore.drawer3" elevation="4" width="350"
  >
    <h3 class="d-flex justify-center pa-2  mt-3 rounded-xl bg-blue" style="color: #1A237E">Image Filters</h3>
    <v-container class="elevation-3 rounded-xl pa-4 mt-3">

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
            Webgl:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxWebgl"
              color="indigo"
              @change="webgl"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col cols="4"><span>Saturation</span></v-col>
        <v-col cols="8">
          <v-slider
              v-model="slider2"
              color="green"
              label="color"
              @update:model-value="saturation"
          ></v-slider>
        </v-col>
      </v-row>

      <v-divider/>

      <v-row>
        <v-col cols="4"><span>Contrast</span></v-col>
        <v-col cols="8">
          <v-slider
              v-model="slider3"
              color="blue"
              label="color"
              @update:model-value="contrast"
          ></v-slider>
        </v-col>
      </v-row>

      <v-divider/>

      <v-row>
        <v-col cols="4"><span>Hue</span></v-col>
        <v-col cols="8">
          <v-slider
              v-model="slider4"
              color="blue"
              label="color"
              @update:model-value="hue"
          ></v-slider>
        </v-col>
      </v-row>

      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
            Vintage:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxVintage"
              color="indigo"
              @change="vintage"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
            Sepia:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxSepia"
              color="indigo"
              @change="sepiaFunction"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
            Black/White:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxBW"
              color="indigo"
              @change="blackWhite"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
           Brownie:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxBrownie"
              color="indigo"
              @change="Brownie"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
           Kodachrome:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxKodachrome"
              color="indigo"
              @change="kodachrome"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
           Technicolor:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxTechnicolor"
              color="indigo"
              @change="technicolor"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

      <v-row>
        <v-col style="margin-top: 1.2rem">
          <span>
           Polaroid:
          </span>
        </v-col>
        <v-col>
          <v-checkbox
              v-model="checkboxPolaroid"
              color="indigo"
              @change="polaroid"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-divider/>

    </v-container>
  </v-navigation-drawer>
</template>


<script>
import {useDrawerPanStore} from "@/stores/useDrawerPan";

export default {
  emits: ['saturation', 'contrast', 'hue', 'filt', 'vintage', 'sepiaFunction', 'blackWhite', 'Brownie', 'kodachrome', 'polaroid', 'technicolor', 'webgl'],

  setup() {
    const panStore = useDrawerPanStore()
    return {panStore}
  },
  data: () => ({
    checkbox1: false,
    slider1: 49,
    slider2: 50,
    slider3: 49,
    slider4: 49,
    checkbox2: false,
    checkboxVintage: false,
    checkboxSepia: false,
    checkboxBW: false,
    checkboxBrownie: false,
    checkboxKodachrome: false,
    checkboxTechnicolor: false,
    checkboxPolaroid: false,
    checkboxWebgl: false,
  }),


  methods: {
    webgl() {
      this.$emit("webgl", this.checkboxWebgl)
    },
    saturation() {
      this.$emit("saturation", this.slider2);
    },
    contrast() {
      this.$emit("contrast", this.slider3);
    },
    hue() {
      this.$emit("hue", this.slider4);
    },
    filt() {
      console.log(this.checkbox2)
      this.$emit("filt", this.checkbox2);
    },
    vintage() {
      this.$emit("vintage", this.checkboxVintage);

    },
    sepiaFunction() {
      this.$emit("sepiaFunction", this.checkboxSepia);
    },
    blackWhite() {
      this.$emit("blackWhite", this.checkboxBW)
    },
    Brownie() {
      this.$emit("Brownie", this.checkboxBrownie)
    },
    kodachrome() {
      this.$emit("kodachrome", this.checkboxKodachrome)
    },
    technicolor() {
      this.$emit("technicolor", this.checkboxTechnicolor)
    },
    polaroid() {
      this.$emit("polaroid", this.checkboxPolaroid)
    }
  }
}
</script>