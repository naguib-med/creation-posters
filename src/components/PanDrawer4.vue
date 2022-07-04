<template>
  <!--  Pour la navigation drawer 4-->
  <v-navigation-drawer v-if="panStore.drawer4" elevation="4" width="350"
  >

    <h3 class="d-flex justify-center pa-2 ma-5 rounded-xl text-white " style="background: indigo">Galerie</h3>

    <v-tabs
        v-model="tab"
        class="rounded-tl-xl rounded-br-xl"
    >
      <v-tab value="one">Images</v-tab>
      <v-tab value="two">Émoji</v-tab>
      <v-tab value="three">Photos</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="one">
        <v-row class="ma-3">
          <v-col
              v-for="item in items"
              :key="item"
              class="d-flex child-flex elevation-3 rounded-b-lg"
              cols="4"
          >
            <v-img
                :src="item.imgURL"
                aspect-ratio="1"
                class="grey lighten-2"
                draggable="true" @dragstart="startImgDrag"
            >
              <template #placeholder>
                <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                >
                  <v-progress-circular
                      color="grey lighten-5"
                      indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="two">
        <v-row class="ma-3">
          <v-col
              v-for="item in emojis"
              :key="item"
              class="d-flex child-flex elevation-3 rounded-b-lg"
              cols="4"
          >
            <v-img
                :src="item.imgURL"
                aspect-ratio="1"
                class="grey lighten-2"
                draggable="true" @dragstart="startImgDrag"
            >
              <template #placeholder>
                <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                >
                  <v-progress-circular
                      color="grey lighten-5"
                      indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="three">
        <v-row class="ma-3">
          <v-col
              v-for="item in photos"
              :key="item"
              class="d-flex child-flex elevation-3 rounded-b-lg"
              cols="4"
          >
            <v-img
                :src="item.imgURL"
                aspect-ratio="1"
                class="grey lighten-2"
                draggable="true" @dragstart="startImgDrag"
            >
              <template #placeholder>
                <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                >
                  <v-progress-circular
                      color="grey lighten-5"
                      indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>


  </v-navigation-drawer>

</template>


<script>
import {useDrawerPanStore} from "@/stores/useDrawerPan";

export default {
  emits: ['startImgDrag'],

  setup() {
    const panStore = useDrawerPanStore()
    return {panStore}
  },
  data: () => ({
    tab: '',
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
    ],

    emojis: [
      {title: 'Hello Emoji ', imgURL: require('@/assets/emojis/smiling.png')},
      {title: 'Down Face ', imgURL: require('@/assets/emojis/Down Face.png')},
      {title: 'Smiling Face Emoji ', imgURL: require('@/assets/emojis/Smiling Face Emoji.png')},
      {title: 'Heart Eyes Emoj ', imgURL: require('@/assets/emojis/Heart Eyes Emoji.png')},
      {title: 'Earth Globe Asia Emoji ', imgURL: require('@/assets/emojis/Earth Globe Asia Emoji.png')},
      {title: 'Yellow Moon Emoj ', imgURL: require('@/assets/emojis/Yellow Moon Emoji.png')},
      {
        title: 'Last Quarter Moon With Face Emoji ',
        imgURL: require('@/assets/emojis/Last Quarter Moon With Face Emoji.png')
      },
      {
        title: 'First Quarter Moon With Face Emoji',
        imgURL: require('@/assets/emojis/First Quarter Moon With Face Emoji.png')
      },
      {title: 'The Sun Emoji ', imgURL: require('@/assets/emojis/The Sun Emoji.png')},
      {title: 'Fire Emoji 🔥 ', imgURL: require('@/assets/emojis/Fire Emoji 🔥.png')},
      {title: 'Tulip Emoji Icon ', imgURL: require('@/assets/emojis/Tulip Emoji Icon.png')},
    ],
    photos: [
      {title: 'flower ', imgURL: require('@/assets/photos/flower.jpg')},
      {title: 'foret ', imgURL: require('@/assets/photos/foret.jpg')},
      {title: 'route ', imgURL: require('@/assets/photos/route.jpg')},
      {title: 'toureiffel ', imgURL: require('@/assets/photos/toureiffel.jpg')},

    ]
  }),

  methods: {
    startImgDrag(e) {
      this.$emit("startImgDrag", e);
    },
  }
}
</script>