import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "iobellaauth.firebaseapp.com",
  projectId: "iobellaauth",
  storageBucket: "iobellaauth.appspot.com",
  messagingSenderId: "905081105461",
  appId: "1:905081105461:web:8c43012d3cfb556f0b157c"
};

const app = initializeApp(firebaseConfig);