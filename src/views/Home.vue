<template>
  <v-navigation-drawer app elevation="2" mini-variant rail>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item color="primary" link @click="drawerD(0)">
        <v-icon color="primary" icon="fa-solid fa-font"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Texte
        </v-tooltip>
      </v-list-item>
      <v-list-item color="primary" link @click="drawerD(1)">
        <v-icon color="primary" icon="fa-solid fa-shapes"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Éléments
        </v-tooltip>
      </v-list-item>

      <v-list-item color="primary" link @click="drawerD(2)">
        <v-icon color="primary" icon="fa-solid fa-wand-magic-sparkles"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Filtre image
        </v-tooltip>
      </v-list-item>

      <v-list-item color="primary" link @click="drawerD(3)">
        <v-icon color="primary" icon="fa-solid fa-icons"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Galerie
        </v-tooltip>
      </v-list-item>

      <v-list-item color="primary" link @click="drawerD(4)">
        <v-icon color="primary" icon="fa-solid fa-upload" @change="tempStore.fetchPosters()"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Importer
        </v-tooltip>
      </v-list-item>

      <v-list-item color="primary" link @click="drawerD(5)">
        <v-icon color="primary" icon="fa-solid fa-folder" @change="tempStore.fetchPosters()"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Posters
        </v-tooltip>
      </v-list-item>

      <v-list-item color="primary" link @click="guideApp">
        <v-icon color="primary" icon="fa-solid fa-ellipsis" @change="tempStore.fetchPosters()"/>
        <v-tooltip
            activator="parent"
            anchor="end"
        >Guide de l'application
        </v-tooltip>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

  <PanDrawer
      @add-background="addBackground"
      @add-background-default="addBackgroundDefault"
      @add-content="addContent"
      @add-date-end="addDateEnd"
      @add-date-start="addDateStart"
      @add-effet-text="addEffetText"
      @add-titre="addTitre"
  />
  <PanDrawer2
      @add-figure-cir="addFigureCir"
      @add-figure-line="addFigureLine"
      @add-figure-poly="addFigurePoly"
      @add-figure-rec="addFigureRec"
      @add-figure-trig="addFigureTrig"
      @change-color="changeColor"
  />
  <PanDrawer3
      @brownie="Brownie"
      @contrast="contrast"
      @filt="filt"
      @hue="hue"
      @kodachrome="kodachrome"
      @polaroid="polaroid"
      @saturation="saturation"
      @technicolor="technicolor"
      @vintage="vintage"
      @webgl="webgl"
      @sepia-function="sepiaFunction"
      @black-white="blackWhite"
  />
  <PanDrawer4
      @start-img-drag="startImgDrag"
  />
  <PanDrawer5
      @import-image="importImage"
  />

  <PanDrawer6/>

  <v-container fluid>

    <v-snackbar
        v-model="authStore.snackbar"
        :timeout="timeout"
        top
    >
      {{ text }}

      <template #actions>
        <v-btn
            color="success"
            variant="text"
            @click="authStore.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-toolbar id="t" class="d-flex pa-1 ma-1 rounded" elevation="4">
      <div class="mx-auto">
        <div v-if="isShow" class="d-flex justify-space-between pb-0 ">
          <v-dialog
              transition="dialog-bottom-transition"
          >
            <template #activator="{ props }">
              <v-btn
                  v-bind="props"
              >
                <v-icon :color="canvasColor">fa-solid fa-fill-drip</v-icon>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                >
                  Couleur du canvas
                </v-tooltip>
              </v-btn>
            </template>
            <template #default="{ isActive }">
              <v-card width="40vh">
                <v-toolbar
                    color="indigo"
                >Choisir une couleur
                </v-toolbar>
                <v-card-text>
                  <div class="text-h2">
                    <div id="c1" class="form__field ma-6">
                      <div class="form__input ">
                        <v-swatches v-model="canvasColor" class="ms-2" inline @click="onChangeColorcanvas"></v-swatches>
                      </div>
                    </div>

                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                      class="bg-indigo"
                      text
                      @click="isActive.value = false"
                  >Fermer
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>

      <div class="mx-auto hidden-md-and-down">
        <div v-if="!isShow" class="d-flex justify-space-between pb-0  ">

          <v-btn-toggle
              class="me-1 pa-1"
              color="indigo"
              variant="outlined"
          >

            <v-flex class="select">
              <v-autocomplete
                  v-model="font"
                  :items="dropdown_font"
                  class="me-2"
                  label="Select font"
                  md="3"
                  sm="6"
                  variant="outlined"
              ></v-autocomplete>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Nom de police
              </v-tooltip>
            </v-flex>

            <v-flex class="select me-1">
              <v-autocomplete
                  v-model="fontsize"
                  :items="dropdown_edit"
                  class="me-2 mb-0"
                  label="Select size"
                  md="3"
                  sm="6"
                  variant="outlined"
              ></v-autocomplete>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Taille de police
              </v-tooltip>
            </v-flex>


            <v-dialog
                transition="dialog-bottom-transition"
            >
              <template #activator="{ props }">
                <v-btn v-bind="props">
                  <div class="d-flex align-center flex-column justify-center">
                    <v-icon icon="fa-solid fa-font"></v-icon>
                    <v-tooltip
                        activator="parent"
                        anchor="bottom"
                    >
                      Couleur du texte
                    </v-tooltip>
                    <v-sheet
                        :style="{'border-bottom':'5px solid'+ color }"
                        height="4"
                        rounded
                        style="margin-top: 3px"
                        tile
                        width="26"
                    ></v-sheet>
                  </div>
                </v-btn>
              </template>

              <template #default="{ isActive }">
                <v-card width="40rem">
                  <v-toolbar
                      color="indigo"
                  >Choisir une couleur
                  </v-toolbar>
                  <v-card-text>
                    <div class="text-h2">
                      <div id="c2" class="form__field ma-6">
                        <div class="form__input ">
                          <v-swatches v-model="color" class="ms-2" inline @click="onChangeColor"></v-swatches>
                        </div>
                      </div>

                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                        class="bg-indigo"
                        style=" height: 2.5rem !important;"
                        @click="isActive.value = false"
                    >Fermer
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>


          </v-btn-toggle>


          <v-btn-toggle
              v-model="toggle_multiple"
              class="pa-1"
              color="indigo"
              divided
              multiple
              variant="outlined"
          >

            <v-btn
                :disabled="isBold"
                :value="1"
                size="small"
            >
              <v-icon>fa-solid fa-bold</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Gras
              </v-tooltip>
            </v-btn>
            <v-btn
                :value="2"
                size="small"
            >
              <v-icon>fa-solid fa-italic</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Italique
              </v-tooltip>
            </v-btn>

            <v-btn
                :value="3"
                size="small"
            >
              <v-icon>fa-solid fa-underline</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Souligner
              </v-tooltip>
            </v-btn>

            <v-btn
                :value="4"
                size="small"
            >
              <v-icon>fa-solid fa-text-height</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Espacement
              </v-tooltip>

            </v-btn>
            <v-btn
                :value="5"
                size="small"
            >
              <v-icon>fa-solid fa-text-width</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Interligne
              </v-tooltip>
            </v-btn>
            <v-btn
                :value="6"
                size="small"
            >
              <v-icon>fa-solid fa-text-slash</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Barré
              </v-tooltip>
            </v-btn>

          </v-btn-toggle>

          <v-btn-toggle
              v-model="toggle_exclusive"
              class="ms-1 pa-1"
              color="indigo"
              group
              variant="outlined"
              @click="alignText"
          >
            <v-btn
                :value="1"
                size="small"
            >
              <v-icon>fa-solid fa-align-left</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Aligner à gauche
              </v-tooltip>
            </v-btn>

            <v-btn
                :value="2"
                size="small"
            >
              <v-icon>fa-solid fa-align-center</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Centrer
              </v-tooltip>
            </v-btn>

            <v-btn
                :value="3"
                size="small"
            >
              <v-icon>fa-solid fa-align-right</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Aligner à droite
              </v-tooltip>
            </v-btn>

            <v-btn
                :value="4"
                size="small"
            >
              <v-icon>fa-solid fa-align-justify</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              >
                Justifié
              </v-tooltip>
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>


      <div class="hidden-md-and-up">
        <v-menu width="47vh">
          <template #activator="{ props }">
            <v-btn
                color="indigo"
                v-bind="props"
            >
              <v-icon icon="fa-solid fa-sliders"/>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-flex class="select">
                <v-autocomplete
                    v-model="font" :items="dropdown_font" class="me-2 pa-1"
                    label="Select font"
                    variant="outlined"
                ></v-autocomplete>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                >
                  Nom de police
                </v-tooltip>
              </v-flex>

              <v-flex class="select">
                <v-autocomplete
                    v-model="fontsize"
                    :items="dropdown_edit"
                    class="me-2 mb-0 pa-1"
                    label="Select size"
                    solo-inverted
                    variant="outlined"
                ></v-autocomplete>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                >
                  Taille de police
                </v-tooltip>
              </v-flex>

              <v-dialog
                  transition="dialog-bottom-transition"
              >
                <template #activator="{ props }">
                  <v-btn class="pa-1" v-bind="props">
                    <div class="d-flex align-center flex-column justify-center">
                      <v-icon icon="fa-solid fa-font"></v-icon>
                      <v-tooltip
                          activator="parent"
                          anchor="bottom"
                      >
                        Couleur du texte
                      </v-tooltip>
                      <v-sheet
                          :style="{'border-bottom':'5px solid'+ color }"
                          height="4"
                          rounded
                          style="margin-top: 3px"
                          tile
                          width="26"
                      ></v-sheet>
                    </div>
                  </v-btn>
                </template>

                <template #default="{ isActive }">
                  <v-card width="40vh">
                    <v-toolbar
                        color="indigo"
                    >Choisir une couleur
                    </v-toolbar>
                    <v-card-text>
                      <div class="text-h2">
                        <div id="c2" class="form__field ma-6">
                          <div class="form__input ">
                            <v-swatches v-model="color" class="ms-2" inline @click="onChangeColor"></v-swatches>
                          </div>
                        </div>

                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                          class="bg-indigo"
                          style=" height: 2.5rem !important;"
                          @click="isActive.value = false"
                      >Fermer
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-list-item>

            <v-divider/>

            <v-list-item>
              <v-btn-toggle
                  v-model="toggle_multiple"
                  class="pa-1"
                  color="indigo"
                  divided
                  multiple
                  variant="outlined"

              >

                <v-btn
                    :disabled="isBold"
                    :value="1"
                    size="small"
                >
                  <v-icon>fa-solid fa-bold</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Gras
                  </v-tooltip>
                </v-btn>
                <v-btn
                    :value="2"
                    size="small"
                >
                  <v-icon>fa-solid fa-italic</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Italique
                  </v-tooltip>
                </v-btn>

                <v-btn
                    :value="3"
                    size="small"
                >
                  <v-icon>fa-solid fa-underline</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Souligner
                  </v-tooltip>
                </v-btn>

                <v-btn
                    :value="4"
                    size="small"
                >
                  <v-icon>fa-solid fa-text-height</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Espacement
                  </v-tooltip>

                </v-btn>
                <v-btn
                    :value="5"
                    size="small"
                >
                  <v-icon>fa-solid fa-text-width</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Interligne
                  </v-tooltip>
                </v-btn>
                <v-btn
                    :value="6"
                    size="small"
                >
                  <v-icon>fa-solid fa-text-slash</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Barré
                  </v-tooltip>
                </v-btn>

              </v-btn-toggle>
            </v-list-item>

            <v-divider/>

            <v-list-item>
              <v-btn-toggle
                  v-model="toggle_exclusive"
                  class="ms-1 pa-1"
                  color="indigo"
                  group
                  variant="outlined"
                  @click="alignText"
              >
                <v-btn
                    :value="1"
                    size="small"
                >
                  <v-icon>fa-solid fa-align-left</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Aligner à gauche
                  </v-tooltip>
                </v-btn>

                <v-btn
                    :value="2"
                    size="small"
                >
                  <v-icon>fa-solid fa-align-center</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Centrer
                  </v-tooltip>
                </v-btn>

                <v-btn
                    :value="3"
                    size="small"
                >
                  <v-icon>fa-solid fa-align-right</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Aligner à droite
                  </v-tooltip>
                </v-btn>

                <v-btn
                    :value="4"
                    size="small"
                >
                  <v-icon>fa-solid fa-align-justify</v-icon>
                  <v-tooltip
                      activator="parent"
                      anchor="bottom"
                  >
                    Justifié
                  </v-tooltip>
                </v-btn>
              </v-btn-toggle>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>


      <!--      v-menu pour les buttons save poster -->

      <div class="hidden-md-and-up">
        <v-menu width="25vh">
          <template #activator="{ props }">
            <v-btn
                color="primary"
                size="small"
                v-bind="props"
            >
              <v-icon class="me-1" icon="fa-solid fa-file-pen"/>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn
                  class="ms-1"
                  color="indigo"
                  elevation="10"
                  size="small"
                  variant="outlined"
                  @click="UpdatePoster"


              >
                <v-icon class="me-1">fa-solid fa-file-pen</v-icon>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                > Modifier Poster
                </v-tooltip>
              </v-btn>

              <v-btn
                  class="ms-1"
                  color="green"
                  elevation="10"
                  size="small"

                  variant="outlined"
                  @click="savePosterbyUser"

              >
                <v-icon class="me-1">fa-solid fa-plus</v-icon>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                > Sauvegarder
                </v-tooltip>
              </v-btn>

              <v-btn
                  class="ms-1" color="grey"
                  elevation="10"
                  size="small"
                  variant="outlined"
                  @click="refreshData"

              >
                <v-icon class="me-1">fa-solid fa-arrows-rotate</v-icon>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                > Rafraîchir
                </v-tooltip>
              </v-btn>

              <v-menu anchor="start">
                <template #activator="{ props }">
                  <v-btn
                      class="ms-1 "
                      color="red"
                      elevation="10"
                      size="small"
                      v-bind="props" variant="outlined"
                  >
                    <v-icon class="me-1">fa-solid fa-trash</v-icon>
                    <v-tooltip
                        activator="parent"
                        anchor="bottom"
                    >
                      Effacer
                    </v-tooltip>
                  </v-btn>

                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn color="indigo" variant="outlined" @click="clearcanvas('supPoster')">
                        Supprimer ce poster
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider/>
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn color="indigo" variant="outlined" @click="clearcanvas('vider')">Vider Canevas</v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu anchor="start">
                <template #activator="{ props }">
                  <v-btn
                      class="ms-1"
                      color="orange"
                      elevation="10"
                      size="small"
                      v-bind="props" variant="outlined"

                  >
                    <v-icon>fa-solid fa-download</v-icon>
                    <v-tooltip
                        activator="parent"
                        anchor="bottom"
                    >
                      Télécharger
                    </v-tooltip>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn color="indigo" variant="outlined" @click="exportPoster(png)">PNG</v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider/>
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn color="indigo" variant="outlined" @click="exportPoster(pdf)">PDF</v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider/>
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn color="indigo" variant="outlined" @click="exportPoster(jpeg)">JPEG</v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider/>
                  <v-list-item>
                    <v-list-item-title>
                      <v-dialog
                          v-model="dialogSVG"

                      >
                        <template #activator="{ props }">
                          <v-btn
                              color="indigo" v-bind="props"
                              variant="outlined"
                              @click="exportPoster(svg)"
                          >
                            SVG
                          </v-btn>
                        </template>
                        <v-card id="svgCard" height="800" width="700">
                          <v-card-title class="text-h5">
                            Clipboard
                          </v-card-title>
                          <v-card-text>
                            <v-textarea
                                id="foo"
                                ref="clone"
                                v-model="svgContent"
                                background-color="amber lighten-4"
                                color="orange orange-darken-4"
                                label="Solo textarea"
                                name="input-7-4"
                                solo
                                @focus="$event.target.select()"
                            ></v-textarea>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="bg-orange"
                                elevation="2"
                                @click="copy"
                            >
                              <v-icon
                                  color="white" icon="fa-solid fa-copy"
                                  @click="fermerDialogSVG"/>
                            </v-btn>

                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-spacer></v-spacer>

      <v-btn :class=" isUndo ? 'is-blue' : 'is-gray'" :disabled="!isUndo" size="small" @click="undo">
        <v-icon>fa-solid fa-arrow-rotate-left</v-icon>
        <v-tooltip
            activator="parent"
            anchor="bottom"
        >
          Annuler
        </v-tooltip>
      </v-btn>
      <v-btn
          :class=" isRedo ? 'is-blue' : 'is-gray' " :disabled="!isRedo" class="ms-1" size="small"
          @click="redo">
        <v-icon>fa-solid fa-arrow-rotate-right</v-icon>
        <v-tooltip
            activator="parent"
            anchor="bottom"
        >
          Répéter
        </v-tooltip>
      </v-btn>

      <div class="hidden-md-and-down">
        <div class="float-right d-flex ml-auto ">
          <v-hover v-slot="{ isHovering, props }">
            <v-btn
                :elevation="isHovering ? 10 : 2" class="ms-1"

                color="indigo"
                v-bind="props"
                variant="outlined" @click="UpdatePoster"
            >
              <v-icon class="me-1">fa-solid fa-file-pen</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              > Modifier Poster
              </v-tooltip>
            </v-btn>
          </v-hover>

          <v-hover v-slot="{ isHovering, props }">
            <v-btn
                :elevation="isHovering ? 10 : 2" class="ms-1"
                color="green"
                v-bind="props"
                variant="outlined" @click="savePosterbyUser"
            >
              <v-icon class="me-1">fa-solid fa-plus</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              > Sauvegarder
              </v-tooltip>
            </v-btn>
          </v-hover>

          <v-hover v-slot="{ isHovering, props }">
            <v-btn
                :elevation="isHovering ? 10 :  2" bg-red-accent-2 class="ms-1"
                color="grey"
                v-bind="props"
                variant="outlined" @click="refreshData"
            >
              <v-icon class="me-1">fa-solid fa-arrows-rotate</v-icon>
              <v-tooltip
                  activator="parent"
                  anchor="bottom"
              > Rafraîchir
              </v-tooltip>
            </v-btn>
          </v-hover>


          <v-menu anchor="start">
            <template #activator="{ props }">
              <v-btn
                  class="ms-1 "
                  color="red"
                  elevation="5"
                  v-bind="props" variant="outlined"
              >
                <v-icon class="me-1">fa-solid fa-trash</v-icon>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                >
                  Effacer
                </v-tooltip>
              </v-btn>

            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <v-btn color="indigo" variant="outlined" @click="clearcanvas('supPoster')">
                    Supprimer ce poster
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-divider/>
              <v-list-item>
                <v-list-item-title>
                  <v-btn color="indigo" variant="outlined" @click="clearcanvas('vider')">Vider Canevas</v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu anchor="start">
            <template #activator="{ props }">
              <v-btn
                  class="ms-1"
                  color="orange"
                  elevation="5"
                  v-bind="props" variant="outlined"

              >
                <v-icon>fa-solid fa-download</v-icon>
                <v-tooltip
                    activator="parent"
                    anchor="bottom"
                >
                  Télécharger
                </v-tooltip>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <v-btn color="indigo" variant="outlined" @click="exportPoster(png)">PNG</v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-divider/>
              <v-list-item>
                <v-list-item-title>
                  <v-btn color="indigo" variant="outlined" @click="exportPoster(pdf)">PDF</v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-divider/>
              <v-list-item>
                <v-list-item-title>
                  <v-btn color="indigo" variant="outlined" @click="exportPoster(jpeg)">JPEG</v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-divider/>
              <v-list-item>
                <v-list-item-title>
                  <v-dialog
                      v-model="dialogSVG"

                  >
                    <template #activator="{ props }">
                      <v-btn
                          color="indigo" v-bind="props"
                          variant="outlined"
                          @click="exportPoster(svg)"
                      >
                        SVG
                      </v-btn>
                    </template>
                    <v-card id="svgCard" height="800" width="700">
                      <v-card-title class="text-h5">
                        Clipboard
                      </v-card-title>
                      <v-card-text>
                        <v-textarea
                            id="foo"
                            ref="clone"
                            v-model="svgContent"
                            background-color="amber lighten-4"
                            color="orange orange-darken-4"
                            label="Solo textarea"
                            name="input-7-4"
                            solo
                            @focus="$event.target.select()"
                        ></v-textarea>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="bg-orange"
                            elevation="2"
                            @click="copy"
                        >
                          <v-icon
                              color="white" icon="fa-solid fa-copy"
                              @click="fermerDialogSVG"/>
                        </v-btn>

                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

    </v-toolbar>

    <v-snackbar
        v-model="snackbarSVG"
    >
      Copié
      <template #actions>
        <v-btn
            color="blue"
            variant="text"
            @click="snackbarSVG = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>

    <div class="d-flex mx-auto justify-center mt-2 mb-3" style="width: 50rem;">
      <v-alert v-model="errorNamePoster" border="start" closable type="error">
        Veuillez entrer le nom du poster
      </v-alert>

      <v-alert v-model="saveSuccessPoster" border="start" closable type="success">
        Poster a été enregistré avec succès !
      </v-alert>

      <v-alert v-model="successPoster" border="start" closable type="success">
        Poster a été modifié avec succès !
      </v-alert>

      <v-alert v-model="delPoster" border="start" closable type="success">
        Poster a été supprimé avec succès !
      </v-alert>
    </div>

    <v-row class="d-flex justify-center mt-2">
      <v-col
          cols="4"
          md="2"
          sm="2">
        <v-btn class="me-1 mb-1" color="indigo" style="height: 4vh" @click="zoomIn">zoom In</v-btn>
        <v-btn color="indigo" style="height: 4vh" @click="zoomOut">zoom Out</v-btn>
      </v-col>

      <v-col
          cols="4"
          md="2"
          sm="2">
        <v-text-field
            v-model="nomPoster"
            class="pa-0 ma-0 rounded"
            color="primary"
            label="Nom du poster"
            variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <!--    d-flex mx-auto-->

    <v-row id="divCanvas" style="overflow: auto; ">
      <div class="mb-3 d-flex mx-auto" style="margin: 1em auto auto !important;">
        <canvas id="mycanvas" class="rounded"></canvas>
      </div>
    </v-row>

  </v-container>


</template>


<script>

import {fabric} from "fabric";
import {datareal, auth} from "@/firebaseDb";

import {getStorage, uploadBytesResumable, getDownloadURL, ref as sRef} from "firebase/storage";

import {child, get, set, ref} from "firebase/database";
import 'fabric-history';
import VSwatches from 'vue3-swatches'

import PanDrawer from "@/components/PanDrawer";
import {useDrawerPanStore} from "@/stores/useDrawerPan";
import PanDrawer2 from "@/components/PanDrawer2";
import PanDrawer3 from "@/components/PanDrawer3";
import PanDrawer4 from "@/components/PanDrawer4";
import PanDrawer5 from "@/components/PanDrawer5";
import PanDrawer6 from "@/components/PanDrawer6";
import moment from "moment";


let newTitle;
let newContent;
let newDateStart;
let newDateEnd;

let canvas;
let panStore;
let image;
let imageFile;
let imageFileDe;

import {useTemplate} from "@/stores/useTemplate";
import {useUserStore} from "@/stores/useAuth";
import {jsPDF} from "jspdf";
import {onBeforeMount} from "vue";

let tempStore;
let authStore;

let canvasScale = 1; //global
let SCALE_FACTOR = 1.01;


export default {
  components: {PanDrawer2, PanDrawer, PanDrawer3, PanDrawer4, PanDrawer5, VSwatches, PanDrawer6},
  emits: ['get-posters'],

  setup() {
    panStore = useDrawerPanStore()
    tempStore = useTemplate()
    authStore = useUserStore()
    onBeforeMount(() => {
      tempStore.fetchPosters()
    })
    return {panStore, tempStore, authStore}

  },

  data: () => ({
    snackbarSVG: false,
    svgContent: '',
    dialogSVG: false,
    png: 'png',
    pdf: 'pdf',
    jpeg: 'jpeg',
    svg: 'svg',
    errorNamePoster: false,
    saveSuccessPoster: false,
    successPoster: false,
    delPoster: false,
    timeout: 2000,
    text: 'Contents de vous revoir. Faites vous plaisir !!',
    canvas: '',
    closeOnClick: true,
    nomPoster: '',
    isBold: false,
    isShow: true,
    isUndo: false,
    isUndoCol: '',
    isRedo: false,
    isRedoCol: '',
    fontsize: undefined,
    color: '#F64272',
    canvasColor: '#F64272',
    dialog: false,
    dialog2: false,
    statusBold: false,
    statusItalic: false,
    statusUnderline: false,
    font: '',
    value: 0,
    colors: [
      ['#F64272', '#F6648B', '#F493A7', '#F891A6', '#FFCCD5'],
      ['#8b5aff', '#a27bff', '#b99cff', '#d0bdff', '#e8deff'],
      ['#51e5db', '#74ebe3', '#96f0ea', '#b9f5f1', '#dcfaf8'],
      ['#ffa51a', '#ffb748', '#ffc976', '#ffdba3', '#ffedd1']
    ],
    dropdown_font: [
      "Arial",
      "Calibri",
      "Verdana",
      "Courier",
      "Helvetica",
      "Noto",
      "Trebuchet MS",
    ],

    dropdown_edit: [
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '18',
      '20',
      '22',
      '24',
      '28',
      '32',
      '36',
      '40',
      '44',
      '48',
      '52',
      '56',
      '60',
      '64',
    ],
    toggle_exclusive: 1,
    toggle_multiple: [],
    itemsPan: [
      {val: 1, icon: 'fa-solid fa-fon'},
      {val: 2, icon: 'mdi-account-multiple'},
      {val: 3, icon: 'mdi-star'},
      {val: 4, icon: 'mdi-star'},
      {val: 4, icon: 'mdi-star'},
    ],
    chosenFile: null,
    toggle_dimension: 1,
    mini: true,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  }),


  computed: {
    finalPoster() {
      return tempStore.finalPoster
    },
    posters() {
      return tempStore.posters
    },
    selectedPoster() {
      return tempStore.selectedPoster
    },
  },

  watch: {
    selectedPoster() {
      const tab = []
      this.nomPoster = tempStore.selectedPoster
      for (let i = 0; i < tempStore.posters.length; i++) {
        if (tempStore.posters[i].key === tempStore.selectedPoster) {
          tempStore.posters[i].data.forEach(element => {
            tab.push(element)
          })

        }
      }
      tempStore.finalPoster = tab

    },

    finalPoster(newValue, oldValue) {
      console.log(oldValue)
      console.log(newValue)
      let tab = []
      let backB;
      let imgB;
      let boolImg = false;
      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i].key === 'canvasData') {
          for (let j = 0; j < newValue[i].data.length; j++) {
            if (newValue[i].data[j].key === 'objects') {
              tab = newValue[i].data[j].data;
            }
            if (newValue[i].data[j].key === 'background') {
              backB = newValue[i].data[j].data
            }
            if (newValue[i].data[j].key === 'backgroundImage') {
              boolImg = true;
              imgB = newValue[i].data[j].data
              newValue[i].data[j].data.scaleX = 0.674448768
              newValue[i].data[j].data.scaleY = 1.354166667
            }
          }

        }
      }


      let jsonString;
      if (boolImg) {
        jsonString = '{"objects":' + JSON.stringify(tab) + "," + JSON.stringify("background") + ":" + JSON.stringify(backB) + "," +
            JSON.stringify("backgroundImage") + ":" + JSON.stringify(imgB) +
            '}'
      } else {
        jsonString = '{"objects":' + JSON.stringify(tab) + "," + JSON.stringify("background") + ":" + JSON.stringify(backB) + '}'
      }


      canvas.loadFromJSON(jsonString, canvas.renderAll.bind(canvas), function (o, object) {
        object.set('selectable', true)
        object.set('editable', true)
      })

    },

    toggle_multiple: function () {
      if (this.toggle_multiple[0] === 1 || this.toggle_multiple[1] === 1 || this.toggle_multiple[2] === 1
          || this.toggle_multiple[3] === 1 || this.toggle_multiple[4] === 1 || this.toggle_multiple[5] === 1
      ) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("fontWeight", "bold");
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("fontWeight", "");
        canvas.renderAll();
      }

      if (this.toggle_multiple[0] === 2 || this.toggle_multiple[1] === 2 || this.toggle_multiple[2] === 2
          || this.toggle_multiple[3] === 2 || this.toggle_multiple[4] === 2 || this.toggle_multiple[5] === 2) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("fontStyle", "italic");
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("fontStyle", "");
        canvas.renderAll();
      }

      if (this.toggle_multiple[0] === 3 || this.toggle_multiple[1] === 3 || this.toggle_multiple[2] === 3
          || this.toggle_multiple[3] === 3 || this.toggle_multiple[4] === 3 || this.toggle_multiple[5] === 3) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("underline", true);
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("underline", false);
        canvas.renderAll();
      }

      if (this.toggle_multiple[0] === 4 || this.toggle_multiple[1] === 4 || this.toggle_multiple[2] === 4
          || this.toggle_multiple[3] === 4 || this.toggle_multiple[4] === 4 || this.toggle_multiple[5] === 4) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("lineHeight", 2);
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("lineHeight", 1);
        canvas.renderAll();
      }

      if (this.toggle_multiple[0] === 5 || this.toggle_multiple[1] === 5 || this.toggle_multiple[2] === 5
          || this.toggle_multiple[3] === 5 || this.toggle_multiple[4] === 5 || this.toggle_multiple[5] === 5) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("charSpacing", 100);
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("charSpacing", 45);
        canvas.renderAll();
      }

      if (this.toggle_multiple[0] === 6 || this.toggle_multiple[1] === 6 || this.toggle_multiple[2] === 6
          || this.toggle_multiple[3] === 6 || this.toggle_multiple[4] === 6 || this.toggle_multiple[5] === 6
          || this.toggle_multiple[6] === 6) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("linethrough", true);
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("linethrough", false);
        canvas.renderAll();
      }
    },
    font(value) {
      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set("fontFamily", value);
        canvas.renderAll();
      }
    },

    fontsize(val) {
      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set("fontSize", val);
        canvas.renderAll();
      }
    },
  },

  created() {
    tempStore.fetchPosters();
  },
  mounted() {

    canvas = new fabric.Canvas("mycanvas", {
      backgroundColor: "#F7F6F5",
      width: 520,
      height: 650,
      hoverCursor: 'pointer',
      preserveObjectStacking: true,
      selection: true,
    })


    this.resizeCanvas();

    window.addEventListener('resize', this.resizeCanvas, false);
    window.addEventListener('load', this.resizeCanvas, false);


    document.addEventListener("keydown", this.onHandleKeyDown);

    fabric.filterBackend = fabric.initFilterBackend();

    canvas.on("selection:created", function (args) {
      this.isBold = args.selected[0].fontWeight === "bold";
      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set({
          transparentCorners: false,
          cornerColor: 'blue',
          cornerStrokeColor: '#008CBA',
          borderColor: '#008CBA',
          cornerSize: 12,
          padding: 10,
          cornerStyle: 'circle',
          borderDashArray: [3, 3]
        })
      }

    });

    canvas.on("object:added", function () {
      vm.isUndo = true;
      vm.isUndoCol = '#fff'
    })
    canvas.on("object:removed", function () {
      vm.isRedo = true;
      vm.isRedoCol = '#fff'
    })

    canvas.on("text:changed", function () {
      if (canvas.getActiveObject().poster_pom_type === "titre") {
        newTitle.hiddenTextarea.setAttribute('maxlength', 15);
      } else if (canvas.getActiveObject().poster_pom_type === "description") {
        newContent.hiddenTextarea.setAttribute('maxlength', 200);
      }

    })


    canvas.on("mouse:over", function () {
      let canvasEl = document.getElementById('mycanvas');
      canvasEl.style.borderColor = "blue";
    })
    canvas.on("mouse:out", function () {
      let canvasEl = document.getElementById('mycanvas');
      canvasEl.style.borderColor = "";

    })


    canvas.on("mouse:wheel", function (opt) {
      const delta = 0 - opt.e.deltaY;
      let zoom = canvas.getZoom();
      zoom = zoom + delta / 300;
      if (zoom > 3) zoom = 3;
      if (zoom < 0.7) zoom = 0.7;
      canvas.setZoom(zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });


    canvas.on("mouse:down", function (opt) {
      let evt = opt.e;
      if (evt.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    });

    canvas.on("mouse:move", function (opt) {
      if (this.isDragging) {
        const e = opt.e;
        this.viewportTransform[4] += e.clientX - this.lastPosX;
        this.viewportTransform[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;

      }
    });

    let vm = this;
    canvas.on("mouse:up", function (e) {

      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set({
          transparentCorners: false,
          cornerColor: 'blue',
          cornerStrokeColor: '#008CBA',
          borderColor: '#008CBA',
          cornerSize: 12,
          padding: 10,
          cornerStyle: 'circle',
          borderDashArray: [3, 3]
        })
        let canvasEl = document.getElementById('mycanvas');
        canvasEl.style.borderColor = "";
        canvasEl.style.borderWidth = 2;

      } else {
        let canvasEl = document.getElementById('mycanvas');
        canvasEl.style.borderColor = "#008CBA";
        canvasEl.style.borderWidth = 2;
      }
      if (e.target) {

        if (canvas.getActiveObject().type === 'textbox') {
          vm.isShow = false;
          panStore.drawer = true;
          panStore.drawer2 = false;
          panStore.drawer3 = false;
          panStore.drawer4 = false;
          panStore.drawer5 = false;
          panStore.drawer6 = false;

        } else if (canvas.getActiveObject().type === "i-text") {
          vm.isShow = false;
          panStore.drawer = true;
          panStore.drawer2 = false;
          panStore.drawer3 = false;
          panStore.drawer4 = false;
          panStore.drawer5 = false;
          panStore.drawer6 = false;
        } else if (canvas.getActiveObject().type === 'image') {
          panStore.drawer = false;
          panStore.drawer2 = false;
          panStore.drawer3 = true;
          panStore.drawer4 = false;
          panStore.drawer5 = false;
          panStore.drawer6 = false;

        }


        vm.isBold = canvas.getActiveObject().fontWeight === "bold";
      } else {
        vm.isShow = true;
      }
      this.isDragging = false;
      this.selection = true;
    });

    canvas.on("mouse:wheel", function (opt) {
      const delta = 0 - opt.e.deltaY;
      let zoom = canvas.getZoom();
      zoom = zoom + delta / 300;
      if (zoom > 3) zoom = 3;
      if (zoom < 0.7) zoom = 0.7;
      canvas.setZoom(zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });


    canvas.on("drop", function (dropArgs) {

      if (dropArgs.e.preventDefault) {

        dropArgs.e.preventDefault();
      }

      const image = JSON.parse(dropArgs.e.dataTransfer.getData("image"));
      fabric.Image.fromURL(image.src, function (img) {

        img.left = dropArgs.e.layerX - image.x;
        img.top = dropArgs.e.layerY - image.y;

        img.scaleToWidth(160, false);

        canvas.add(img);
        canvas.renderAll();
      });
    });
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvas);
  },

  methods: {

    resizeCanvas() {
      if (window.innerWidth <= 1000 || window.innerWidth < 600 || window.innerWidth < 960) {
        let height = document.getElementById('divCanvas').offsetHeight
        let width = document.getElementById('divCanvas').offsetWidth - 20
        let ratio = canvas.getWidth() / canvas.getHeight();

        if ((width / height) > ratio) {
          width = height * ratio;
        } else {
          height = width / ratio;
        }
        let scale = width / canvas.getWidth();
        let zoom = canvas.getZoom();
        zoom *= scale;
        canvas.setDimensions({width: width, height: height});
        canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0])
        canvas.renderAll();
      } else {
        canvas.setWidth(520);
        canvas.setHeight(650);
        canvas.setZoom(1)
        canvas.renderAll();
      }

    },

    refreshData() {
      this.$router.go(0);
    },
    undo() {
      canvas.undo();
    },
    redo() {
      canvas.redo();
    },
    startImgDrag(e) {
      const image = {src: e.target.src, x: e.offsetX, y: e.offsetY};
      e.dataTransfer.setData("image", JSON.stringify(image));
    },
    addTitre() {
      newTitle = new fabric.IText('Ajouter un titre', {
        left: 100,
        top: 284,
        fill: "#000",
        strokeWidth: 0,
        fontSize: 50,
        width: 200,
        fontWeight: 'bold',
        fontFamily: "Open Sans Condensed",
      });

      newTitle["poster_pom_type"] = "titre";

      canvas.add(newTitle);
      canvas.setActiveObject(newTitle);
    },

    addContent() {
      newContent = new fabric.Textbox('Ajouter une description', {
        left: 60,
        top: 400,
        fill: "#000",
        strokeWidth: 0,
        fontSize: 33,
        width: 400,
        fontFamily: "Open Sans Condensed",
      });

      newContent.set("poster_pom_type", "description")
      canvas.add(newContent)
    },

    addDateStart() {
      newDateStart = new fabric.Textbox('Ajouter une date', {
        left: 60,
        top: 550,
        fill: "#000",
        strokeWidth: 0,
        fontSize: 23,
        width: 180,
        fontFamily: "Open Sans Condensed",
      });

      newDateStart["poster_pom_type"] = "dateDebut"

      canvas.add(newDateStart)
      canvas.setActiveObject(newDateStart)
      newDateStart.enterEditing()
      newDateStart.selectAll()
    },

    addDateEnd() {
      newDateEnd = new fabric.Textbox('Ajouter fin date', {
        left: 310,
        top: 550,
        fill: "#000",
        strokeWidth: 0,
        fontSize: 23,
        width: 180,
        fontFamily: "Open Sans Condensed",
      });

      newDateEnd["poster_pom_type"] = "dateFin"


      canvas.add(newDateEnd)
      canvas.setActiveObject(newDateEnd)
      newDateEnd.enterEditing()
      newDateEnd.selectAll()
    },

    addEffetText(val) {
      if (canvas.getActiveObject()) {
        if (val === 1) {
          canvas.getActiveObject().set("shadow", 'red 2px 2px 5px')

        } else if (val === 2) {
          canvas.getActiveObject().set("shadow", '5px 5px 5px rgb(0, 0, 255)')

        } else if (val === 3) {
          canvas.getActiveObject().set("shadow", '5px 2px 5px rgb(255, 165, 0)')
        } else if (val === 4) {
          canvas.getActiveObject().set("shadow", '-5px -5px 3px green')
        }
        canvas.renderAll()

      }
    },


    addFigureRec() {
      const rect = new fabric.Rect({
        width: 200,
        height: 200,
        top: 100,
        left: 100,
        fill: '#27AF60'
      });
      canvas.add(rect);
    },

    addFigureCir() {
      const circle = new fabric.Circle({
        top: 50, left: 250,
        radius: 50, fill: '#AB47BC'
      });
      canvas.add(circle);
    },
    addFigureTrig() {
      const triangle = new fabric.Triangle({
        top: 60, left: 50,
        width: 150, height: 120, fill: '#A463BF'
      });
      canvas.add(triangle);
    },
    addFigurePoly() {
      const polygon = new fabric.Polygon([
        {x: 0, y: 0}, {x: 50, y: 0}, {x: 50, y: 50}
      ], {
        top: 300, left: 400,
        fill: '#3D556E', stroke: '#795548'
      });

      canvas.add(polygon);
    },
    addFigureLine() {
      const line = new fabric.Line([50, 50, 200, 50], {
        strokeWidth: 5,
        stroke: '#03A87C'

      });
      canvas.add(line);
    },

    addBackground(url) {
      imageFileDe = url.target.files[0];
      imageFile = URL.createObjectURL(url.target.files[0]);
      this.removeBackground();
      fabric.Image.fromURL(
          imageFile,
          (img) => {
            if (canvas) {
              canvas.setBackgroundImage(
                  img,
                  () => {
                    canvas.renderAll();
                  },
                  {
                    scaleX: canvas.width / img.width,
                    scaleY: canvas.height / img.height
                  }
              );
            }
          },
          {crossOrigin: "anonymous"}
      );
    },
    addBackgroundDefault(url) {
      this.removeBackground();
      fabric.Image.fromURL(
          url,
          (img) => {
            if (canvas) {
              canvas.setBackgroundImage(
                  img,
                  () => {
                    canvas.renderAll();
                  },
                  {
                    scaleX: canvas.width / img.width,
                    scaleY: canvas.height / img.height
                  }
              );
            }
          },
          {crossOrigin: "anonymous"}
      );
    },

    removeBackground() {
      if (canvas.backgroundImage) {
        canvas.setBackgroundImage(null);
        canvas.renderAll();
      }
    },

    onHandleKeyDown(e) {
      if (e.which === 46) {
        this.deleteActiveObject();
        canvas.renderAll()
      }
    },

    deleteActiveObject() {
      canvas.getActiveObjects().forEach((object) => {
        canvas.remove(object);
      });
    },

    guideApp() {
      this.$router.push({
        path: '/guide'
      })
    },

    webgl(checked) {
      let webglBackend;
      try {
        webglBackend = new fabric.WebglFilterBackend();
      } catch (e) {
        console.log(e)
      }
      let canvas2dBackend = new fabric.Canvas2dFilterBackend()

      fabric.filterBackend = fabric.initFilterBackend();

      if (checked) {
        fabric.filterBackend = webglBackend;
      } else {
        fabric.filterBackend = canvas2dBackend;
      }
    },
    saturation(e) {
      let object = canvas.getActiveObject()
      object.filters[10] = new fabric.Image.filters.Saturation({
        saturation: e
      });
      object.applyFilters();
      canvas.renderAll();
    },

    contrast(e) {
      let object = canvas.getActiveObject()
      object.filters[10] = new fabric.Image.filters.Contrast({
        contrast: e
      });
      object.applyFilters();
      canvas.renderAll();
    },
    hue(e) {
      let object = canvas.getActiveObject()
      object.filters[10] = new fabric.Image.filters.HueRotation({
        rotation: e
      });
      object.applyFilters();
      canvas.renderAll();
    },

    filt(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters.push(
            new fabric.Image.filters.Brightness({brightness: 5}));
        object.applyFilters();
        canvas.renderAll();
      }
    },
    vintage(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[1] = new fabric.Image.filters.Vintage()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[1] = null
        object.applyFilters();
        canvas.renderAll();
      }
    },

    sepiaFunction(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[2] = new fabric.Image.filters.Sepia()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[2] = null
        object.applyFilters();
        canvas.renderAll();
      }
    },

    blackWhite(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[3] = new fabric.Image.filters.BlackWhite()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[3] = null
        object.applyFilters();
        canvas.renderAll();
      }
    },

    Brownie(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[4] = new fabric.Image.filters.Brownie()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[4] = null
        object.applyFilters();
        canvas.renderAll();
      }
    },
    kodachrome(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[5] = new fabric.Image.filters.Kodachrome()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[5] = null
        object.applyFilters();
        canvas.renderAll();

      }
    },
    technicolor(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[6] = new fabric.Image.filters.Technicolor()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[6] = null
        object.applyFilters();
        canvas.renderAll();
      }
    },
    polaroid(e) {
      if (e) {
        let object = canvas.getActiveObject()
        object.filters[7] = new fabric.Image.filters.Polaroid()
        object.applyFilters();
        canvas.renderAll();
      } else {
        let object = canvas.getActiveObject()
        object.filters[7] = null
        object.applyFilters();
        canvas.renderAll();
      }
    },

    importImage(e) {

      imageFileDe = e.target.files[0];
      imageFile = URL.createObjectURL(e.target.files[0]);
      fabric.Image.fromURL(
          imageFile,
          (img) => {
            image = img;
            canvas.add(image);
            canvas.renderAll();
          },
          {scaleX: 0.3, scaleY: 0.3}
      );
    },

    zoomToPercent(e) {
      const percentage = Number(e.target.value) / 100;
      canvas.setZoom(canvas.getZoom() * percentage)
    },


    zoomIn() {
      // canvas.setZoom(canvas.getZoom() * 1.1);
      canvasScale = canvasScale * SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
      canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

      let objects = canvas.getObjects();
      for (let i in objects) {
        let scaleX = objects[i].scaleX;
        let scaleY = objects[i].scaleY;
        let left = objects[i].left;
        let top = objects[i].top;

        let tempScaleX = scaleX * SCALE_FACTOR;
        let tempScaleY = scaleY * SCALE_FACTOR;
        let tempLeft = left * SCALE_FACTOR;
        let tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
      }


      canvas.renderAll();
    },

    zoomOut() {
      canvasScale = canvasScale / SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * (1 / SCALE_FACTOR));
      canvas.setWidth(canvas.getWidth() * (1 / SCALE_FACTOR));

      let objects = canvas.getObjects();
      for (let i in objects) {
        let scaleX = objects[i].scaleX;
        let scaleY = objects[i].scaleY;
        let left = objects[i].left;
        let top = objects[i].top;

        let tempScaleX = scaleX * (1 / SCALE_FACTOR);
        let tempScaleY = scaleY * (1 / SCALE_FACTOR);
        let tempLeft = left * (1 / SCALE_FACTOR);
        let tempTop = top * (1 / SCALE_FACTOR);

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
      }

      canvas.renderAll();
      // canvas.setZoom(canvas.getZoom() / 1.1);
    },


    drawerD(event) {
      if (event === 0) {
        panStore.drawer = true;
        panStore.drawer2 = false;
        panStore.drawer3 = false;
        panStore.drawer4 = false;
        panStore.drawer5 = false;
        panStore.drawer6 = false;
      } else if (event === 1) {
        panStore.drawer = false;
        panStore.drawer2 = true;
        panStore.drawer3 = false;
        panStore.drawer4 = false;
        panStore.drawer5 = false;
        panStore.drawer6 = false;
      } else if (event === 2) {
        panStore.drawer = false;
        panStore.drawer2 = false;
        panStore.drawer3 = true;
        panStore.drawer4 = false;
        panStore.drawer5 = false;
        panStore.drawer6 = false;

      } else if (event === 3) {
        panStore.drawer = false;
        panStore.drawer2 = false;
        panStore.drawer3 = false;
        panStore.drawer4 = true;
        panStore.drawer5 = false;
        panStore.drawer6 = false;

      } else if (event === 4) {
        panStore.drawer = false;
        panStore.drawer2 = false;
        panStore.drawer3 = false;
        panStore.drawer4 = false;
        panStore.drawer5 = true;
        panStore.drawer6 = false;
      } else if (event === 5) {
        panStore.drawer = false;
        panStore.drawer2 = false;
        panStore.drawer3 = false;
        panStore.drawer4 = false;
        panStore.drawer5 = false;
        panStore.drawer6 = true;

      }

    },

    fontTextChange: function () {
      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set("fontFamily", this.font);
        canvas.renderAll();
      }

    },

    sizeTextChange() {
      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set("fontSize", this.fontsize);
        canvas.renderAll();
      }

    }
    ,

    styleTextChange() {
      if (this.toggle_multiple[1] === 2) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("fontStyle", "italic");
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("fontStyle", "");
        canvas.renderAll();
      }
      if (this.toggle_multiple[0] === 1) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("fontWeight", "bold");
          canvas.renderAll();
        }
      } else {
        canvas.getActiveObject().set("fontWeight", "");
        canvas.renderAll();
      }


      if (this.toggle_multiple[2] === 3) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("underline", true);
          canvas.renderAll();
        }
      } else {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("underline", false);
          canvas.renderAll();
        }
      }
      if (this.toggle_multiple[4] === 5) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("charSpacing", 100);
          canvas.renderAll();
        }
      } else {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("charSpacing", 50);
          canvas.renderAll();
        }
      }


    },

    /* methode pour les alignements du text*/

    alignText() {
      if (this.toggle_exclusive === 1) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("textAlign", "left")
          canvas.renderAll()
        }
      } else if (this.toggle_exclusive === 2) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("textAlign", "center")
          canvas.renderAll()
        }
      } else if (this.toggle_exclusive === 3) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("textAlign", "right")
          canvas.renderAll()
        }
      } else if (this.toggle_exclusive === 4) {
        if (canvas.getActiveObject()) {
          canvas.getActiveObject().set("textAlign", "justify")
          canvas.renderAll()
        }
      }
    },

    changeColor(col) {
      canvas.getActiveObject().set("fill", col);
      canvas.renderAll();
    },
    onChangeColor() {
      if (canvas.getActiveObject()) {
        canvas.getActiveObject().set("fill", this.color);
        // canvasStore.canvas.getActiveObject().set("backgroundColor", this.color);
        canvas.renderAll();
      }
    },
    onChangeColorcanvas() {
      this.removeBackground();
      if (canvas) {
        canvas.backgroundColor = this.canvasColor
        canvas.renderAll();
      }
    },

    UpdatePoster() {
      const json = JSON.stringify(canvas);

      const parsedString = JSON.parse(json)
      // parsedString["poster-pom-name"] = "poster";
      // parsedString["last-edit"] = moment().format('MMMM Do YYYY, h:mm:ss a');
      // new Date().toISOString().slice(0, 10);
      const user = auth.currentUser.uid;
      const dbRef = ref(datareal)

      if (imageFile) {
        let filename = imageFileDe.name
        const storage = getStorage();
        const storageRef = sRef(storage, 'images/' + filename);
        const metadata = {
          contentType: 'image/jpeg'
        };

        const uploadTask = uploadBytesResumable(storageRef, imageFileDe, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              console.log(error)
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                for (let i = 0; i < parsedString.objects.length; i++) {
                  if (parsedString.objects[i].type === 'image') {
                    parsedString.objects[i].src = downloadURL;
                  }
                }
                get(child(dbRef, 'poster-pom/' + this.nomPoster))
                    .then((snapshot) => {
                      if (snapshot.exists()) {
                        snapshot.forEach(function (childSnapshot) {
                          if (childSnapshot.key === tempStore.selectedPoster) {
                            set(ref(datareal, 'poster-pom/' + childSnapshot.key), {
                              canvasData: parsedString,
                              uid: user
                            }).then(() => {
                              this.successPoster = true;
                            })
                          }
                        })
                      }
                    }).catch((error) => {
                  console.log(error)
                })
                this.successPoster = true;
                this.clearcanvas('vider');
                this.nomPoster = '';
              });
            }
        );
      } else {
        get(child(dbRef, 'poster-pom/' + this.nomPoster))
            .then((snapshot) => {
              if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                  if (childSnapshot.key === tempStore.selectedPoster) {
                    set(ref(datareal, 'poster-pom/' + childSnapshot.key), {
                      canvasData: parsedString,
                      uid: user
                    }).then(() => {
                    })
                  }
                })
              }
            }).catch((error) => {
          console.log(error)
        })
        this.successPoster = true;
        this.clearcanvas('vider');
        this.nomPoster = '';
      }
    },
    savePosterbyUser() {
      const user = auth.currentUser.uid;
      authStore.userID = user;
      const json = JSON.stringify(canvas);
      const parsedString = JSON.parse(json)
      parsedString["posterPomName"] = this.nomPoster;
      parsedString["lastEdit"] = moment().format('MMMM Do YYYY, h:mm:ss a');

      parsedString["posterPomHeight"] = canvas.height;
      parsedString["posterPomWidth"] = canvas.width;

      let parsedTitre;
      if (newTitle !== undefined) {
        const jsonTitre = JSON.stringify(newTitle)
        parsedTitre = JSON.parse(jsonTitre)
        parsedTitre["posterPomType"] = "titre"
        parsedTitre["posterPomMaxLenght"] = 15
      } else {
        parsedTitre = null;
      }
      let parsedDesc;
      if (newContent !== undefined) {
        const jsonDesc = JSON.stringify(newContent)
        parsedDesc = JSON.parse(jsonDesc)
        parsedDesc["posterPomType"] = "description"
        parsedTitre["posterPomMaxLenght"] = 200
      } else {
        parsedDesc = null;
      }

      let parsedDateDeb;
      if (newDateStart !== undefined) {
        const jsonDateDeb = JSON.stringify(newDateStart)
        parsedDateDeb = JSON.parse(jsonDateDeb)
        parsedDateDeb["posterPomType"] = "dateDebut"
      } else {
        parsedDateDeb = null;
      }

      let parsedDateFin;
      if (newDateEnd !== undefined) {
        const jsonDateFin = JSON.stringify(newDateEnd)
        parsedDateFin = JSON.parse(jsonDateFin)
        parsedDateFin["posterPomType"] = "dateFin"
      } else {
        parsedDateFin = null;
      }

      let parsedImage;
      if (image !== undefined) {
        const jsonImage = JSON.stringify(image)
        parsedImage = JSON.parse(jsonImage)
        parsedImage["posterPomType"] = "image"
        parsedString.objects[4] = parsedImage;
      } else {
        parsedImage = null;
      }

      parsedString.objects[0] = parsedTitre;
      parsedString.objects[1] = parsedDesc;
      parsedString.objects[2] = parsedDateDeb;
      parsedString.objects[3] = parsedDateFin


      if (imageFileDe) {
        let filename = imageFileDe.name
        const storage = getStorage();
        const storageRef = sRef(storage, 'images/' + filename);

        const metadata = {
          contentType: 'image/jpeg'
        };

        const uploadTask = uploadBytesResumable(storageRef, imageFileDe, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              console.log(error)
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                for (let i = 0; i < parsedString.objects.length; i++) {
                  if (parsedString.objects[i].type === 'image') {
                    parsedString.objects[i].crossOrigin = 'Anonymous';
                    parsedString.objects[i].src = downloadURL;
                  }
                }

                if (this.nomPoster === '') {
                  this.errorNamePoster = true;
                } else {
                  set(ref(datareal, 'poster-pom/' + this.nomPoster), {
                    canvasData: parsedString,
                    uid: user
                  }).then(() => {
                    this.saveSuccessPoster = true;
                    this.clearcanvas('vider');
                    this.nomPoster = '';
                    console.log("Document successfully written!");
                  });
                }
              });
            }
        );
      } else {
        if (this.nomPoster === '') {
          this.errorNamePoster = true;
        } else {
          set(ref(datareal, 'poster-pom/' + this.nomPoster), {
            canvasData: parsedString,
            uid: user
          }).then(() => {
            this.saveSuccessPoster = true;
            this.clearcanvas('vider');
            this.nomPoster = '';
            this.refreshData();
            console.log("Document successfully written!");
          });
        }
      }

    }
    ,
    clearcanvas(event) {
      if (event === 'supPoster') {
        tempStore.delete(tempStore.selectedPoster)
        canvas.clear();
        this.nomPoster = '';
        this.delPoster = true;
      } else if (event === 'vider') {
        canvas.clear();
        this.nomPoster = '';
        // canvas.backgroundColor = "#fff";
      }


    },

    exportPoster(e) {
      const dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        multiplier: 4,
        left: 0,
        top: 0,
        format: 'png',
      });

      if (e === 'png') {
        const link = document.createElement('a');
        link.download = 'poster.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      if (e === 'pdf') {
        let pdf;
        if (canvas.width > canvas.height) {
          pdf = new jsPDF('l', 'px', [canvas.width, canvas.height]);
        } else {
          pdf = new jsPDF('p', 'px', [canvas.height, canvas.width]);
        }
        let width = pdf.internal.pageSize.getWidth();
        let height = pdf.internal.pageSize.getHeight();
        pdf.addImage(
            dataURL,
            0,
            0,
            width,
            height
        );
        pdf.save('poster.pdf');
      }
      if (e === 'jpeg') {
        const link = document.createElement('a');
        link.download = 'poster.jpeg';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      if (e === 'svg') {
        this.svgContent = canvas.toSVG();
      }

    },

    copy() {
      navigator.clipboard.writeText(this.svgContent)
    },
    fermerDialogSVG() {
      this.snackbarSVG = true;
      this.dialogSVG = false;
    },

    exportJson() {
      const json = JSON.stringify(canvas);
      console.log(json);

    },


  },


}

</script>

<style>


#mycanvas {
  border: 2px grey dashed;
}

.brand:hover {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
}

.bg-active {
  background-color: #252627;
}

.v-input__details {
  padding: 0 !important;
  margin: 0 !important;
}

.v-field__input {
  padding: 0 !important;
}

.is-red {
  background: red;
}

.is-blue {
  background: #3F51B5;
}

.select {
  min-width: 100px;
}

#svgCard .v-field__field {
  height: 650px !important;
}

.v-input--density-default {
  --v-input-control-height: 44px !important;
  --v-input-padding-top: 16px;
}
</style>