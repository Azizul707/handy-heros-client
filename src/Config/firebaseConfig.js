import { initializeApp } from "firebase/app";

// const apiKey = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;
// const authDomain = import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN;
// ... and so on


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);

export default app;
