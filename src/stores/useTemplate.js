import { defineStore } from 'pinia'
import { child, get, getDatabase, ref, remove } from 'firebase/database'

import { ref as asref } from 'vue'
import { useUserStore } from '@/stores/useAuth'
import { datareal } from '@/firebaseDb'

export const useTemplate = defineStore('template', {
    state: () => ({
        posters: [],
        selectedPoster: null,
        finalPoster: [],
    }),
    getters: {
        getPosters(state) {
            return state.posters
        },
    },
    actions: {
        setSelectedPoster(state, poster) {
            this.selectedPoster = poster
        },

        delete(key) {
            const postRef = ref(datareal, 'poster-pom/' + key)
            remove(postRef).then(() => {
                console.log('a été bien supprimé')
            })

            // onValue(postRef, (snapshot) => {
            //     const data = snapshot.val()
            //     console.log(data)
            //     data.setValue(null)
            // })
        },

        async fetchPosters() {
            let id = asref(false)
            let idUser
            const dbRef = ref(getDatabase())
            get(child(dbRef, 'poster-pom/'))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const poster = []

                        snapshot.forEach(function (childSnapshot) {
                            // const key = childSnapshot.key
                            const template = []
                            childSnapshot.forEach(function (secondChild) {
                                const canvasData = []
                                // let data2
                                if (secondChild.key === 'uid') {
                                    if (
                                        secondChild.val() ===
                                        useUserStore().userID
                                    ) {
                                        idUser = secondChild.val()
                                        id.value = true
                                    } else {
                                        id.value = false
                                    }
                                }

                                if (secondChild.key === 'canvasData') {
                                    secondChild.forEach(function (tird) {
                                        canvasData.push({
                                            key: tird.key,
                                            data: tird.val(),
                                        })
                                    })
                                }

                                template.push({
                                    key: secondChild.key,
                                    data: canvasData,
                                })

                                if (
                                    secondChild.val() === useUserStore().userID
                                ) {
                                    template.push({
                                        key: secondChild.key,
                                        data: secondChild.val(),
                                    })
                                }
                            })

                            if (id.value && useUserStore().userID === idUser) {
                                poster.push({
                                    key: childSnapshot.key,
                                    data: template,
                                })
                            }
                        })
                        this.posters = poster
                        return this.posters
                    } else {
                        console.log('No data available')
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        },
    },
})
