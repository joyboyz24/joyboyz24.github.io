// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgFbvNg0BATiaTyy1zQWQcSHmUuwEE3eM",
  authDomain: "joy-pos-32251.firebaseapp.com",
  projectId: "joy-pos-32251",
  storageBucket: "joy-pos-32251.firebasestorage.app",
  messagingSenderId: "445897636009",
  appId: "1:445897636009:web:100e02326cba0f177ad1b8"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export agar bisa dipakai di file lain
export { db, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp };
