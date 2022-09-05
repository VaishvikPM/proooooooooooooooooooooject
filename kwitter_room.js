var firebaseConfig = {
      apiKey: "AIzaSyDou6z8Y5toimTtmMRfRZ3QWIAF5eD7C5o",
      authDomain: "meeterthegodahah.firebaseapp.com",
      databaseURL: "https://meeterthegodahah-default-rtdb.firebaseio.com",
      projectId: "meeterthegodahah",
      storageBucket: "meeterthegodahah.appspot.com",
      messagingSenderId: "290230722796",
      appId: "1:290230722796:web:087fb9b117dd380a5a85c9"
    };
  
     firebase.initializeApp(firebaseConfig);

    
    
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+room_names+"/div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
