<template>
  <div class="pa-4">
    <v-btn class="mb-5" color="primary" @click="goHome">Revenir</v-btn>

  </div>
  <v-container id="content" class="bg-grey rounded-xl mt-5" fluid>
    <v-card v-for="item in items" :key="item" class="mb-6">
      <v-card-header><h3>Guide</h3></v-card-header>
      <v-card-content>
        <div class="ma-6">
          <v-img :src="item.imgURL" height="200">
          </v-img>
        </div>

      </v-card-content>
    </v-card>
  </v-container>
</template>


<script>
import {useUserStore} from "@/stores/useAuth";
import router from '../router/index'

export default {
  setup() {
    const authStore = useUserStore()

    return {authStore}
  },
  data: function () {
    return {
      items: [
        {title: 'ballon', imgURL: require('@/assets/images/ballon.png')},
        {title: 'book', imgURL: require('@/assets/images/book.png')},
        {title: 'druns', imgURL: require('@/assets/images/druns.png')},
        {title: 'happy', imgURL: require('@/assets/images/happy.png')},
        {title: 'music', imgURL: require('@/assets/images/music.png')},
        {title: 'tree', imgURL: require('@/assets/images/tree.png')},
        {title: 'watercolor', imgURL: require('@/assets/images/watercolor-islam.png')},
        {title: 'education', imgURL: require('@/assets/images/education.png')},
        {title: 'success', imgURL: require('@/assets/images/success.png')},
      ]
    }
  },
  methods: {
    goHome() {
      router.push({path: '/home'})
    }
  }

}
</script>

<style scoped>
#content {
  width: 80%;
}
</style>