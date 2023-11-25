var firebaseConfig = {
    apiKey: "AIzaSyCRZyfauI94q_FMqyjDVRrSS7Kgs_xBU2c",
    authDomain: "kwitter-f2f93.firebaseapp.com",
    databaseURL: "https://kwitter-f2f93-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2f93",
    storageBucket: "kwitter-f2f93.appspot.com",
    messagingSenderId: "878722315432",
    appId: "1:878722315432:web:2681585f2367ecf0c33e9d",
    measurementId: "G-PMDWWDNCBK"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
user_name= localStorage.getItem("user_name");
function addUser() {
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
}
function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
}
function removeUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
}