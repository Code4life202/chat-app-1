
//ADD YOUR FIREBASE LINKS HERE

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

room_name= localStorage.getItem("room_name");
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "Want to add a new room" });
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();


