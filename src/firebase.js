/**/
  
  import firebase from "firebase";
  
  const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyChjWtJVesVwGJOyd7m0prPlA8tlAn-2sU",
        authDomain: "todo-app-cp-d768d.firebaseapp.com",
        databaseURL: "https://todo-app-cp-d768d.firebaseio.com",
        projectId: "todo-app-cp-d768d",
        storageBucket: "todo-app-cp-d768d.appspot.com",
        messagingSenderId: "246671285070",
        appId: "1:246671285070:web:644c552f62755e6a591c1f",
        measurementId: "G-279L5Q0REM"
      
  });

  const db = firebaseApp.firestore();
  
  export default db;
