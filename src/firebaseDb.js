import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getDatabase} from 'firebase/database'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyCw_RPb0jjAW89YUfkrnhCsjWseO9H-XCQ",
//     authDomain: "posters-75384.firebaseapp.com",
//     databaseURL: "https://posters-75384-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "posters-75384",
//     storageBucket: "posters-75384.appspot.com",
//     messagingSenderId: "577084654625",
//     appId: "1:577084654625:web:bb8203a5ccc7ea73b04f60",
//     measurementId: "G-C3WMMCRYL4"
// };

const firebaseConfig = {
    apiKey: 'AIzaSyAPsDm2L-mDBZp0QGuBd46v44nUGhHJyEk',
    authDomain: 'posters-app-3eb45.firebaseapp.com',
    databaseURL: 'https://posters-app-3eb45-default-rtdb.firebaseio.com',
    projectId: 'posters-app-3eb45',
    storageBucket: 'posters-app-3eb45.appspot.com',
    messagingSenderId: '1094745950527',
    appId: '1:1094745950527:web:9e8a56be1fbb9af4c8eb8a',
    measurementId: 'G-78DQCY7PCT',
}

// const firebaseConfig = {
//     apiKey: 'AIzaSyCw_RPb0jjAW89YUfkrnhCsjWseO9H-XCQ',
//     authDomain: 'posters-75384.firebaseapp.com',
//     databaseURL:
//         'https://posters-75384-default-rtdb.europe-west1.firebasedatabase.app',
//     projectId: 'posters-75384',
//     storageBucket: 'posters-75384.appspot.com',
//     messagingSenderId: '577084654625',
//     appId: '1:577084654625:web:bb8203a5ccc7ea73b04f60',
//     measurementId: 'G-C3WMMCRYL4',
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)
// const currentUser = auth.currentUser

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                unsubscribe()
                resolve(user)
            },
            reject
        )
    })
}

const datareal = getDatabase(app)
export { getCurrentUser, auth, db, datareal }
