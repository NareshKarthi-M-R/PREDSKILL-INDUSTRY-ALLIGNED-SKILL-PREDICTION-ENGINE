import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPs0bhSN94_9iEiJvNfwjeiKB9dAW2Tpc",
  authDomain: "predskill-4a490.firebaseapp.com",
  projectId: "predskill-4a490",
  storageBucket: "predskill-4a490.appspot.com",
  messagingSenderId: "482057307595",
  appId: "1:482057307595:web:351ab4614a0ef10631a24e",
  measurementId: "G-Q2Z3F983NN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;