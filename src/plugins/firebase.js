import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAygMpaNlphLmVREujJIvfEZl_TtBEUW8k",
  authDomain: "e-commerce-ced37.firebaseapp.com",
  databaseURL: "https://e-commerce-ced37-default-rtdb.firebaseio.com",
  projectId: "e-commerce-ced37",
  storageBucket: "e-commerce-ced37.appspot.com",
  messagingSenderId: "280130679817",
  appId: "1:280130679817:web:c02587fdd3bb42837cf4d8",
};
// Firebase app config
// const config = {
//   apiKey: process.env.VUE_APP_API_KEY,
//   authDomain: process.env.VUE_APP_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_DATABASE_URL,
//   projectId: process.env.VUE_APP_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_APP_ID,
// };
firebase.initializeApp(config);
