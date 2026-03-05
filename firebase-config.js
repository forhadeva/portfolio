// Use Firebase Compat SDK for better local file support (file://)
// These scripts should be included in the HTML files before this config

const firebaseConfig = {
    apiKey: "AIzaSyACD0qFHdqkSPZbI-Q9HVkMXOyCQ1RiJjU",
    authDomain: "portfolio-fd3dd.firebaseapp.com",
    projectId: "portfolio-fd3dd",
    storageBucket: "portfolio-fd3dd.firebasestorage.app",
    messagingSenderId: "156719712621",
    appId: "1:156719712621:web:e15efade454d1350f97264",
    measurementId: "G-G603WR3ES3"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Fix for local file:// protocol hanging on connections
db.settings({
    host: "firestore.googleapis.com",
    ssl: true,
    experimentalForceLongPolling: true,
    useFetchStreams: false
});

// Immediate connection test
db.collection("connection_test").doc("ping").get()
    .then(() => console.log("✅ Firestore connected successfully!"))
    .catch((err) => console.error("❌ Firestore connection failed:", err));
