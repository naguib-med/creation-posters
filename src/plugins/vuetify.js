// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
//
// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
//
//
// Vue.use(Vuetify)
import { aliases, fa } from 'vuetify/lib/iconsets/fa'

import { mdi } from 'vuetify/lib/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default new createVuetify({
    // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
            mdi,
        },
    },

    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        },
        // defaultTheme: 'myCustomTheme',
        // themes: {
        //     myCustomTheme: {
        //         dark: false,
        //         colors: {
        //             background: '#FFFFFF',
        //             surface: '#FFFFFF',
        //             primary: '#6200EE',
        //             'primary-darken-1': '#3700B3',
        //             secondary: '#03DAC6',
        //             'secondary-darken-1': '#018786',
        //             error: '#B00020',
        //             info: '#2196F3',
        //             success: '#4CAF50',
        //             warning: '#FB8C00',
        //             green: '#00ff00'
        //         }
        //     }
        // }
    },


})
