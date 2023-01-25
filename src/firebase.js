import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from "firebase/firestore";
import { useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyARywaOGVaB2XBa6HTRwkNegyhS0p5qiYY",
  authDomain: "yapa-f1932.firebaseapp.com",
  projectId: "yapa-f1932",
  storageBucket: "yapa-f1932.appspot.com",
  messagingSenderId: "34080854518",
  appId: "1:34080854518:web:534c39004c82c9d27237d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

//firebase app
export default app;

// call the db 
export const db = getFirestore();


//call the collection
const colRef = collection(db, "users");

//testing subcollection
// const fetchPlanner = doc(db, "user",)




// async () => {
//   const userId = await getMetadata(acc1);
//   return data
// }

// async await 

let userId;

export const createUserDocument = async(user,additionalData)=> {

  console.log("function callled");

  console.log(user.uid);
  

 
  
  if(!user) return;
  
  const {email} = user;
  const {firstName} = additionalData;
  const {lastName} = additionalData;

  const data = {
    email,
    firstName ,
    lastName

  }
  

  try{

      console.log("In try function colref");

      await setDoc(doc(db, "users", user.uid), data);

      console.log("success");
      

  }
 
  catch(error){
      console.log("Error while creating user ", error);
  }
 
}




