const firebaseConfig = {
    apiKey: "AIzaSyC7r5arP_nqExhIwQTWIYjG9TCaZ0CebK0",
    authDomain: "practice-243b7.firebaseapp.com",
    databaseURL: "https://practice-243b7-default-rtdb.firebaseio.com",
    projectId: "practice-243b7",
    storageBucket: "practice-243b7.appspot.com",
    messagingSenderId: "767429917685",
    appId: "1:767429917685:web:f563c9202b4b77f6437ebc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }