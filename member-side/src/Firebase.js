
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0-Pwa0e5qjIGaoiwsOAdpOxatfzk-K8Y",
  authDomain: "teleo-6d718.firebaseapp.com",
  projectId: "teleo-6d718",
  storageBucket: "teleo-6d718.appspot.com",
  messagingSenderId: "754694785315",
  appId: "1:754694785315:web:08e3a5a5972021b72ba496",
  measurementId: "G-YZR9F9FRS6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;