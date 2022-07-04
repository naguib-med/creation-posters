<template style="background: rgb(243 244 246)">
  <v-container id="content" fluid>
    <v-col cols="6">
      <v-alert
          v-if="authStore.verifEmailAlert" border="start" closable="" elevation="2" rounded="t-xl b-lg" type="warning"
          variant="outlined">Veuillez
        consulter vos
        courriels pour
        valider votre
        adresse e-mail.
      </v-alert>
    </v-col>
    <br>
    <v-row>
      <v-col v-if="userlogin" lg="6" md="12" sm="12">
        <v-form
            v-model="authStore.validLog"
            lazy-validation>
          <v-card class="pa-lg-5 rounded-xl" elevation="3">
            <v-card-header>
              <v-card-header-text>
                <v-card-title class="text-primary">Login</v-card-title>
              </v-card-header-text>
            </v-card-header>

            <v-card-text class="pa-lg-5">
              <h3 class="mb-4" style="font-size: 26px">Salut, content de te revoir! 👋👋</h3>
              <p class="text-sm mb-5">Pour se connecter, veuillez renseigner les champs suivants.
              </p>

              <v-text-field
                  v-model="authStore.email"
                  :rules="emailRules"
                  color="primary"
                  label="Adresse mail"
                  prepend-inner-icon="fa-solid fa-at"
                  required
                  variant="outlined"

              ></v-text-field>

              <v-text-field
                  v-model="authStore.password"
                  :append-icon="authStore.showPassLog ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                  :rules="passwordRules"
                  :type="authStore.showPassLog ? 'text' : 'password'"
                  color="primary"
                  hint="At least 8 characters"
                  label="Mot de passe"
                  name="Password"
                  prepend-inner-icon="fa-solid fa-lock"
                  required
                  variant="outlined"
                  @click:append="authStore.showPassLog = !authStore.showPassLog"
              ></v-text-field>

              <v-checkbox color="primary" label="Rester connecté?"/>
              <v-btn color="primary" @click="authStore.validate">
                <v-dialog
                    v-model="authStore.loading"
                    :disabled="!authStore.validLog"
                    hide-overlay
                    persistent
                >
                  <v-card
                      color="indigo"
                  >
                    <v-card-text>
                      Connexion en cours
                      <v-progress-linear
                          class="mb-0"
                          color="white"
                          indeterminate
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                Connexion
              </v-btn>
            </v-card-text>

            <v-card-actions>
              <div class="text-sm-body-2">Je n'ai pas de compte? <a class="text-primary" @click="user_register()">S'inscrire</a>.
              </div>
            </v-card-actions>
            <v-card-actions>
              <div class="text-sm-body-2">Mot de passe oublié? <a class="text-primary" @click="password_reset()">Réinitialiser</a>.
              </div>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>

      <v-col v-if="userregister" lg="6" md="12" sm="12">
        <v-form v-model="authStore.valid" lazy-validation
        >
          <v-card class="pa-lg-5 rounded-xl" elevation="3">
            <v-card-header>
              <v-card-header-text>
                <v-card-title class="text-primary">Register</v-card-title>
              </v-card-header-text>
            </v-card-header>

            <v-card-text class="pa-lg-5">
              <h3 class="mb-4" style="font-size: 26px">Commencez avec MyPoster</h3>
              <p class="text-sm mb-5">Afin d'utiliser cette application, veuillez renseigner les champs suivants pour
                vous s'incrire.
              </p>

              <v-text-field
                  v-model="authStore.email"
                  :rules="emailRules"
                  color="primary"
                  label="name@example.com"
                  prepend-inner-icon="fa-solid fa-at"
                  required
                  variant="outlined"
              ></v-text-field>

              <v-text-field
                  v-model="authStore.password"
                  :append-icon="authStore.showPassLog ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                  :rules="passwordRules"
                  :type="authStore.showPassLog ? 'text' : 'password'"
                  color="primary"
                  hint="At least 8 characters"
                  label="Mot de passe"
                  name="Password"
                  prepend-inner-icon="fa-solid fa-lock"
                  required
                  variant="outlined"
                  @click:append="authStore.showPassLog = !authStore.showPassLog"
              ></v-text-field>

              <v-flex>
                <v-text-field
                    v-model="authStore.password"
                    :append-icon="authStore.showPassLog ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                    :rules="passwordRules"
                    :type="authStore.showPassLog ? 'text' : 'password'"
                    color="primary"
                    hint="At least 8 characters"
                    label="Mot de passe"
                    name="Password"
                    prepend-inner-icon="fa-solid fa-lock"
                    required
                    variant="outlined"
                    @click:append="authStore.showPassLog = !authStore.showPassLog"
                ></v-text-field>
              </v-flex>

              <v-checkbox v-model="checkbox" color="primary">
                <template #label>
                  <div>
                    Je suis d'accord avec les
                    <v-tooltip bottom>
                      <template #activator="{ on }">
                        <a
                            href="#"
                            target="_blank"
                            v-on="on"
                            @click.stop
                        >
                          Termes et conditions
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                  </div>
                </template>
              </v-checkbox>

              <v-btn :disabled="!authStore.valid" color="primary" @click="authStore.register">S'inscrire</v-btn>
            </v-card-text>

            <v-row class="mt-5">
              <p class="my-2"> Ou avec </p>
              <v-btn
                  class="ms-2"
                  color="primary"
                  @click="authStore.googleLogin"
              >
                <v-icon class="me-2">fa-brands fa-google</v-icon>
                Google
              </v-btn>
            </v-row>

            <v-card-actions>
              <div class="text-sm-body-2">Vous avez déjà un compte? <a class="text-primary" @click="user_login()">Connexion</a>.
              </div>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>

      <v-col lg="6" md="12" sm="12">
        <v-img
            alt=""
            class="mb-4 ms-auto justify-center"
            src="../assets/login_page_image.png"
            style="transform: rotate(10deg)"
            width="60%"/>
        <h1 class="mb-4 text-primary hlog">My Poster App </h1>
        <p class="plog">Une application simple et efficace.</p>
      </v-col>

    </v-row>

  </v-container>


</template>

<script>
import {useUserStore} from "@/stores/useAuth";
import router from '../router/index'

export default {
  name: "log.vue",
  setup() {
    const authStore = useUserStore()

    return {authStore}
  },
  data: function () {
    return {
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`L'e-mail et le mot de passe que vous avez saisis ne correspondent pas`),
      },
      emailRules: [
        v => !!v || 'Veuillez entrer un email valide',
        v => /.+@.+\..+/.test(v) || 'E-mail doit être valide',
      ],
      passwordRules: [
        v => !!v || 'Veuillez entrer un mot de passe',
        v => (v && v.length >= 6) || 'Le mot de passe doit avoir plus que 6 caractères!'
      ],
      userlogin: true,
      userregister: false
    }
  },
  methods: {
    //user login button click event
    user_login() {
      this.userlogin = true,
          this.userregister = false
    },
    //user register button click event
    user_register() {
      this.userlogin = false,
          this.userregister = true
    },

    password_reset() {
      router.push({
        path: '/forgot-password'
      })
    }
  }
}
</script>

<style scoped>
#content {
  width: 90%;
}


.hlog, .plog {
  font-size: 1.5vw;
  margin-left: 18vw;
}

@media only screen and (max-width: 600px) {
  .hlog, .plog {
    font-size: 5vw;
    margin-left: 30vw;
  }

  v-img {
    max-width: 100%;
  }
}

</style>