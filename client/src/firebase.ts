import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCZvZPNpdYaAVYgLXEIoQqZW2ZGcYxwDQc",
  authDomain: "auth-test-8071f.firebaseapp.com",
  projectId: "auth-test-8071f",
  storageBucket: "auth-test-8071f.appspot.com",
  messagingSenderId: "895995299502",
  appId: "1:895995299502:web:477dcd0f2171bf28474f3f"
});

export default app;
export const auth = getAuth(app);