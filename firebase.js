
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import toast from "react-hot-toast";


const firebaseConfig = {
    apiKey: "AIzaSyC_By05_BqQ0i6VZceWujMD0lXC336IcDg",
    authDomain: "netflix-clone-f6e22.firebaseapp.com",
    projectId: "netflix-clone-f6e22",
    storageBucket: "netflix-clone-f6e22.firebasestorage.app",
    messagingSenderId: "966430652113",
    appId: "1:966430652113:web:35a30a97c1b3b3b22937f0",
    measurementId: "G-JV7R1N5ELX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const singup = async (email, name, passward) => {

    try {

        const res = await createUserWithEmailAndPassword(auth, email, passward)
       const  user = res.user

        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })



    } catch (error) {

        
        toast.error(error.code)


    }


}


const login = async (email, passward) => {
    try {

        await signInWithEmailAndPassword(auth, email, passward)

    } catch (error) {

       toast.error("Please check Your Email or Password")
        

    }


}


const logout = () => {

    signOut(auth)
}


export { auth, login, logout, singup, db, }