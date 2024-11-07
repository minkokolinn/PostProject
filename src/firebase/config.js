import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoUjXIJLZAEwf6URY1gjSsJWE8Qr74xrA",
  authDomain: "vue-blog-system-6a053.firebaseapp.com",
  projectId: "vue-blog-system-6a053",
  storageBucket: "vue-blog-system-6a053.appspot.com",
  messagingSenderId: "1057638750106",
  appId: "1:1057638750106:web:96d6842a0e626660cacc23",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig)

// Setting up database
let db = getFirestore(app)

export {db}