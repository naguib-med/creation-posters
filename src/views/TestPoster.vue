<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <template-card v-for="t in posters" :key="t.key" :t="t" @emit-click-card="emitClickEvent"/>
  </div>
</template>

<script>
import TemplateCard from '../components/Template.vue'
import {useTemplate} from '@/stores/useTemplate'

let store;
export default {
  name: "TestPoster",
  components: {
    TemplateCard
  },
  emits: ['emit-click-card'],
  setup() {
    store = useTemplate()

    return {
      store,
    }
  },
  computed: {
    posters() {
      console.log('salut')
      return store.getPosters
    }
  },
  methods: {
    emitClickEvent() {
      this.$emit('emit-click-card', {message: 'My custom message2'})
    }
  }
}
</script>

<style scoped>

</style>