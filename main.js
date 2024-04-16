import './style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE8QKTgF9_Z2PZpmMSX_WswsMi8rmOzBw",
  authDomain: "auth-7c8e9.firebaseapp.com",
  projectId: "auth-7c8e9",
  storageBucket: "auth-7c8e9.appspot.com",
  messagingSenderId: "100765586239",
  appId: "1:100765586239:web:512a4dfc216f3b1db3b98a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const provider = new GoogleAuthProvider();

function loginWithGoogle(){
   signInWithPopup(auth,provider).then((result)=>{

     const credintial = GoogleAuthProvider.credentialFromResult(result);
     const token = credintial.accessToken;
     const user = result.user;

   }).catch((err)=>{
    console.log(err);
   })

  }


  const gmail_login_btn = document.querySelector("#gmail_login_btn");
 
   gmail_login_btn.addEventListener("click",loginWithGoogle);






   
  onAuthStateChanged(auth,(user)=>{
     if(user){
      console.log("asdd");
      document.querySelector(".user_form").classList.add("hide");
      document.querySelector(".admin_page").classList.add("show");
     }


  })


   function logOut(){
    signOut(auth).then(()=>{
      document.querySelector(".user_form").classList.remove("hide");
      document.querySelector(".admin_page").classList.remove("show");
    })

   }



  const logout_btn = document.querySelector("#logout_btn")
 
   logout_btn.addEventListener("click",logOut);






