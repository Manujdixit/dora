import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtmpgL2QbTTBDRsvr9l5zizj-HJllmKoI",
  authDomain: "dora-b1147.firebaseapp.com",
  projectId: "dora-b1147",
  storageBucket: "dora-b1147.firebasestorage.app",
  messagingSenderId: "423228021824",
  appId: "1:423228021824:web:472201daca8ca436ad13a5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
