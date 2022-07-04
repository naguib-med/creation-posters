<template>
  <v-container id="content">
    <v-row>
      <v-col lg="6">
        <v-img src="../assets/6671.jpg"></v-img>
      </v-col>

      <v-col lg="6">
        <v-subheader
            class="text-h4" style=" font-size: 60px;
        font-weight: bold;
        color: #ff7043;
        font-family: cursive;">
          A propos de nous
        </v-subheader>
        <p class="description">
          Un groupe d'étudiants en master informatique à l'université Claude Bernard Lyon 1.
        </p>

        <v-list>
          <v-list-item>
            <v-icon class="mr-3" color="success">fa-solid fa-check-double</v-icon>
            <v-list-item-content>
              Disponible à tout moment pour répondre à toutes vos questions à propos de notre application.
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-icon class="mr-3" color="success">fa-solid fa-check-double</v-icon>
            <v-list-item-content>
              Un groupe flexible.
            </v-list-item-content>
          </v-list-item>

          <!--          <v-list-item>-->
          <!--            <v-icon class="mr-3" color="success">fa-solid fa-check-double</v-icon>-->
          <!--            <v-list-item-subtitle>-->

          <!--            </v-list-item-subtitle>-->
          <!--          </v-list-item>-->
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>


<style>

#content {
  width: 90%;
  margin-top: 5rem;
}

p.description {
  font-size: 19px;
  margin: 32px 0px;
  font-family: cursive;
  color: #444;
}
</style>