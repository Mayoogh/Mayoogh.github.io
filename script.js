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
  var EngineStatus;
  var BatteryStatus;

  database.ref().on("value", function(snap){
<<<<<<< HEAD
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
<<<<<<< HEAD
      $(".lightStatus").text("The light is on");
=======
      // $(".lightStatus").text("The light is on");
>>>>>>> parent of c7b30e6... Smart_Ride_beta
=======
    EngineStatus = snap.val().EngineStatus;
    BatteryStatus = snap.val().BatteryStatus;
    if(EngineStatus == 1){
       $(".lightStatus").text("The Engine is on");
>>>>>>> parent of 7ae69b7... Default
    } else {
       $(".lightStatus").text("The Engine is off");
    }
    if(BatteryStatus == 1){
       $(".lightStatus").text("The Battery is on");
    } else {
       $(".lightStatus").text("The Battery is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef1 = firebase.database().ref().child("EngineStatus");
    var firebaseRef2 = firebase.database().ref().child("BatteryStatus");

    if(EngineStatus == 1){
      firebaseRef1.set(0);
      EngineStatus = 0;
    } else {
      firebaseRef1.set(1);
      EngineStatus = 1;
    }

    if(BatteryStatus == 1){
      firebaseRef2.set(0);
      BatteryStatus = 0;
    } else {
      firebaseRef2.set(1);
      BatteryStatus = 1;
    }
  });
});
