// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQ95kXUwc0xpGncQFYP-_ZdOH0SjwxJKM",
    authDomain: "led-control-85a90.firebaseapp.com",
    databaseURL: "https://led-control-85a90.firebaseio.com",
    projectId: "led-control-85a90",
    storageBucket: "led-control-85a90.appspot.com",
    messagingSenderId: "753326420890"
  };
  firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
      // $(".lightStatus").text("The light is on");
    } else {
      // $(".lightStatus").text("The light is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");

    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
