import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtDn7sNRZ-a9pQsS6sGY9VPWealHNjNZ0",
    authDomain: "reactcoder-880b0.firebaseapp.com",
    projectId: "reactcoder-880b0",
    storageBucket: "reactcoder-880b0.appspot.com",
    messagingSenderId: "330878840312",
    appId: "1:330878840312:web:355e8e98b86e99aeb9ba0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)