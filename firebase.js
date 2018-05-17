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

var provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithRedirect(provider)
auth.getRedirectResult().then(function(result) {
  var user = result.user;
  var credential = result.credential;
  var operationType = result.operationType;
  }, function(error) {
    var email = error.email;
    var credential = error.credential;
    if (error.code === 'auth/account-exists-with-different-credential') {
      auth.fetchProvidersForEmail(email).then(function(providers) {
      });
    }
  });
