<template>
  <v-list @change="store.fetchPosters()">

    <h3 class="d-flex justify-center pa-3 ma-5 rounded-xl text-white" style="background: #1A237E;">
      Recherche </h3>


    <v-list-item>
      <v-text-field
          v-model="searchTemplate"
          clearable
          color="primary"
          label=" Recherche par nom du poster"
          prepend-inner-icon="fa-solid fa-magnifying-glass"
          variant="outlined"
      ></v-text-field>
    </v-list-item>
  </v-list>
  <div class="d-flex align-items-stretch flex-wrap">
    <template-card v-for="t in filterPosters" :key="t.key" :t="t" @emit-click-card="emitClickEvent"/>
  </div>

</template>

<script>
import TemplateCard from './Template.vue'
import {useTemplate} from '@/stores/useTemplate'
import {onBeforeMount} from "vue";

let store;

export default {
  name: "TemplateListe",
  components: {
    TemplateCard
  },
  emits: ['emit-click-card', 'rafraichir'],
  setup() {
    store = useTemplate()
    onBeforeMount(() => {
      store.fetchPosters()
    })
    return {
      store,
      // bool
    }
  },
  data: () => {
    return {
      searchTemplate: '',
    }
  },
  computed: {
    filterPosters: function () {
      return this.store.posters.filter((poster) => {
        return poster.key.match(this.searchTemplate)
      })
    },

  },
  created() {
    store.fetchPosters();
  },

  methods: {
    emitClickEvent() {
      this.$emit('emit-click-card', {message: 'My custom message2'})
    },
  }
}
</script>

<style scoped>

</style>