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
    BatteryStatus = snap.val().BatteryStatus;
    if(EngineStatus == 1){
      // $(".lightStatus").text("The light is on");
    } else {
      // $(".lightStatus").text("The light is off");
    }
    if(BatteryStatus == 1){
      // $(".lightStatus").text("The light is on");
    } else {
      // $(".lightStatus").text("The light is off");
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
