// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDff13CZ58yiyG9jpZDzDjlvNgMhCRLgDs",
    authDomain: "smartride-8fd1f.firebaseapp.com",
    databaseURL: "https://smartride-8fd1f.firebaseio.com",
    projectId: "smartride-8fd1f",
    storageBucket: "smartride-8fd1f.appspot.com",
    messagingSenderId: "12233100788"
  };
  firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var EngineStatus;
  var BatteryStatus;

  database.ref().on("value", function(snap){
    EngineStatus = snap.val().EngineStatus;
    EngineStatus = snap.val().EngineStatus;
    if(EngineStatus == 1){
      // $(".lightStatus").text("The light is on");
    } else {
      // $(".lightStatus").text("The light is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("EngineStatus");

    if(EngineStatus == 1){
      firebaseRef.set(0);
      EngineStatus = 0;
    } else {
      firebaseRef.set(1);
      EngineStatus = 1;
    }
    
    if(BatteryStatus == 1){
      firebaseRef.set(0);
      BatteryStatus = 0;
    } else {
      firebaseRef.set(1);
      BatteryStatus = 1;
    }
  });
});
