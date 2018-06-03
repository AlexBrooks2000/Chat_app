// Initialize Firebase
var config = {
  apiKey: "AIzaSyANIc4EP-wbtHBGZmFvs_IrQDj9SoD-ilc",
  authDomain: "chat-app-62107.firebaseapp.com",
  databaseURL: "https://chat-app-62107.firebaseio.com",
  projectId: "chat-app-62107",
  storageBucket: "chat-app-62107.appspot.com",
  messagingSenderId: "151166832795"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.collection("chat").doc("mainChat");
const outputHeader = document.querySelector('#messages');
const inputTextField = document.querySelector('#ChatAppID');
const sendButton = document.querySelector('#SendMessage');

sendButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("sending" +textToSave);
  docRef.set({
    finalmessage: textToSave
  }).then(function() {
    console.log("message saved");
  }).catch(function (error) {
    console.log("got an error: ",error);
  });
})
