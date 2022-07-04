<template>
  <!--Pour la navigation drawer 1-->
  <v-navigation-drawer
      v-if="panStore.drawer"
      elevation="4"
      stateless
      width="350"
  >
    <v-list>
      <h3 class="d-flex justify-center pa-2 ma-5 text-white rounded-xl" style="background: #082032">Cliquez sur le texte
        à
        ajouter </h3>
      <v-list-item>
        <!--        style="background-color: #C1A57B"-->
        <v-btn
            id="titre"
            block
            class="rounded-shaped"
            color="indigo"
            size="x-large"
            variant="outlined"
            @click="addTitre($event)"
        >
          <strong> Ajouter un titre</strong>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
            id="description"
            block
            class="rounded-shaped"
            color="indigo"
            size="large"
            variant="outlined"
            @click="addContent($event)"
        >
          Ajouter une description
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-row>
          <v-col>
            <v-btn
                id="dateEven"
                block
                class="rounded-l-xl"
                color="indigo"
                variant="outlined"
                @click="addDateStart($event)"
            >
              Date debut
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
                id="dateEndEven"
                block
                class="rounded-r-xl"
                color="indigo"
                variant="outlined"
                @click="addDateEnd($event)"
            >
              Date fin
            </v-btn>
          </v-col>
        </v-row>
      </v-list-item>

      <v-list-item>
        <v-btn
            block
            class="rounded-xl"
            color="indigo"
            size="large"
            variant="outlined"
            @click="addBackgroundDefault">
          Ajouter image de fond par défaut
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-file-input
            accept="image/*"
            color="primary"
            filled
            label="Importer image de fond"
            prepend-icon="fa-solid fa-image"
            variant="outlined"
            @change="addBackground"
        ></v-file-input>
      </v-list-item>

      <h2 class="d-flex justify-center pa-2 ma-5 text-white rounded-xl" style="background: #082032">Effect de text</h2>
      <v-list-item>
        <v-row>
          <v-col
              class="d-flex"
              cols="6"
          >
            <v-btn block class="rounded-br-xl" elevation="1" flat height="70" @click="addEffetText(1)">
              <h2 id="1" style="font-size: 30px; font-weight:bold; text-shadow: 2px 2px 5px red;">Text</h2>
            </v-btn>
          </v-col>

          <v-col
              class="d-flex"
              cols="6"
          >
            <v-btn block class="rounded-bl-xl" elevation="1" flat height="70" @click="addEffetText(2)">
              <h2 style="font-size: 30px; font-weight:bold; text-shadow: 5px 5px 5px rgb(0, 0, 255)">Text</h2>
            </v-btn>
          </v-col>

          <v-col
              class="d-flex"
              cols="6"
          >
            <v-btn block class="rounded-tr-xl" elevation="1" flat height="70" @click="addEffetText(3)">
              <h2 style="font-size: 30px; font-weight:bold; text-shadow:  5px 2px 5px rgb(255, 165, 0)">Text</h2>
            </v-btn>
          </v-col>

          <v-col
              class="d-flex"
              cols="6"
          >
            <v-btn block class="rounded-tl-xl" elevation="1" flat height="70" @click="addEffetText(4)">
              <h2 style="font-size: 30px; font-weight:bold; text-shadow: -5px -5px 3px green">Text</h2>
            </v-btn>
          </v-col>

        </v-row>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {useDrawerPanStore} from "@/stores/useDrawerPan";

let idTitre;
let idDateDebut;
let idDateFin;
let idDescription;
import '@vuepic/vue-datepicker/dist/main.css'
import {ref} from "vue";

export default {
  components: {},
  emits: ['addDateEnd', 'addDateStart', 'addContent', 'addEffetText', 'addBackground', 'addTitre', 'addBackgroundDefault'],

  setup() {
    const panStore = useDrawerPanStore()

    return {
      panStore
    }

  },

  data: () => ({
    date: ref(),
    format: (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `Selected date is ${day}/${month}/${year}`;
    }
  }),

  watch: {
    date: function () {
      console.log(this.date.toString())
    }
  },

  methods: {
    addTitre(e) {
      this.$emit("addTitre");
      idTitre = e.target.id
      console.log(idTitre)
    },
    addDateStart(e) {
      this.$emit("addDateStart");
      idDateDebut = e.target.id
      console.log(idDateDebut)
    },

    addDateEnd(e) {
      this.$emit("addDateEnd");

      idDateFin = e.target.id
      console.log(idDateFin)
    },

    addContent(e) {
      this.$emit("addContent");
      idDescription = e.target.id
      console.log(idDescription)
    },

    addEffetText(val) {
      this.$emit("addEffetText", val);
    },

    addBackground(url) {
      this.$emit("addBackground", url);
    },
    addBackgroundDefault() {
      const url = require('@/assets/backgroundDefault.jpg')
      this.$emit("addBackgroundDefault", url);
    }


  }

}
</script>