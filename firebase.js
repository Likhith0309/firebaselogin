  
   const firebaseConfig = {
     apiKey: "AIzaSyBFyGJNSgo41QWDQW34ldYv8BBR6Y8UhEI",
     authDomain: "trex-game-fb6a0.firebaseapp.com",
     databaseURL: "https://trex-game-fb6a0-default-rtdb.firebaseio.com",
     projectId: "trex-game-fb6a0",
     storageBucket: "trex-game-fb6a0.appspot.com",
     messagingSenderId: "648195766796",
     appId: "1:648195766796:web:ef02dabfa5136c547c0c29",
     measurementId: "G-8FFGFV0WL4"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);