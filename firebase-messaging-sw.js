importScripts("https://www.gstatic.com/firebasejs/5.0.3/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/5.0.3/firebase-messaging.js")

var config = {
  apiKey: "AIzaSyANIc4EP-wbtHBGZmFvs_IrQDj9SoD-ilc",
  authDomain: "chat-app-62107.firebaseapp.com",
  databaseURL: "https://chat-app-62107.firebaseio.com",
  projectId: "chat-app-62107",
  storageBucket: "chat-app-62107.appspot.com",
  messagingSenderId: "151166832795"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
  // ...
});
