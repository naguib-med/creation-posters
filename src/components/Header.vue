<template>
  <div>

  </div>
  <!--  <v-btn outlined @click="goHome">-->
  <!--    <v-toolbar-title style="color: #3F51B5">-->
  <!--      My Poster-->
  <!--    </v-toolbar-title>-->
  <!--  </v-btn>-->
  <!--  <v-spacer></v-spacer>-->

  <!--  <span v-if="!authStore.isLoggedIn">-->
  <!--        <v-btn class="bg-blue-grey-lighten-5" depressed to="/login">-->
  <!--          Se connecter-->
  <!--        </v-btn>-->

  <!--        <v-btn-->
  <!--            class="ms-3 bg-orange-accent-2"-->
  <!--            color="white"-->
  <!--            depressed-->
  <!--            to="/register"-->
  <!--        >-->
  <!--          S'inscrire-->
  <!--        </v-btn>-->
  <!--      </span>-->

  <!--  <div v-else>-->
  <!--    <div class="float-sm-right">-->
  <!--      <v-avatar-->
  <!--          class="me-2"-->
  <!--          size="45"-->
  <!--          style="background: blue"-->
  <!--          @click="goProfil"-->
  <!--      >-->
  <!--        <v-img alt="Avatar" src="@/assets/avatars/avatar1.png"></v-img>-->
  <!--      </v-avatar>-->
  <!--      <v-btn-->
  <!--          class="ms-3" depressed-->
  <!--          @click="authStore.signOut"-->
  <!--      >-->
  <!--        <v-icon icon="fa-solid fa-right-from-bracket"/>-->
  <!--      </v-btn>-->
  <!--    </div>-->
  <!--  </div>-->

</template>


<script>


import {useUserStore} from "@/stores/useAuth";
import {useDrawerPanStore} from "@/stores/useDrawerPan";


let authStore;
export default {
  name: "Header",
  components: {},
  setup() {
    let panStore = useDrawerPanStore()
    authStore = useUserStore()
    return {
      authStore,
      panStore
    }
  },

  data: () => ({

    items: [
      'web', 'shopping', 'videos', 'images', 'news',
    ],
  }),


  methods: {
    goProfil() {
      this.$router.push({path: '/profile'})
    },
    goHome() {
      if (authStore.isLoggedIn) {
        this.$router.push({path: '/home'})
      } else {
        this.$router.push({path: '/'})
      }
    }
  },
}
</script>

<style scoped>
* {
  text-transform: none !important;
}

.v-toolbar-title {
  font-size: 2rem;
  color: #1A237E;
  font-weight: 700;
  font-family: cursive;
}

</style>