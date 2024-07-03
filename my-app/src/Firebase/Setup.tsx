
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCUmpajcyulaa3GfoL74oomtC2G3oY2664",
  authDomain: "olx-clone-c9447.firebaseapp.com",
  projectId: "olx-clone-c9447",
  storageBucket: "olx-clone-c9447.appspot.com",
  messagingSenderId: "465149472847",
  appId: "1:465149472847:web:47c6067049fdcf15e87a3a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

