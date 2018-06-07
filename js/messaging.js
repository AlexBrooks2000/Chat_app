
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName, "is logged in");
    return displayName;
  } else {
    // User is signed out.
    console.log("user is logged out");
  }
});


var database = firebase.database();
var chatRef = firebase.database().ref().child("messages");
chatRef.on("child_added", snap => {
  var chats = snap.child("message").val();
  var username = snap.child("user").val();
  $("#mainChat").append("<tr><td>" + username +  "<p />" + "<p>: </p>"+ "<p />" + chats + "</td></tr>" + "<p>\n</p>")
});


function addMessage() {
  var inputMessage = document.getElementById("input").value;
  var name = firebase.auth().currentUser.displayName;
  firebase.database().ref().child("messages").push().set({
    message: inputMessage,
    user: name
  });
  console.log("added to database");
}


function signOutUser() {
  firebase.auth().signOut()
  .then(function() {
    console.log("user successfully signed out")
    window.location.replace("index.html");
  })
  .catch(function(error) {
    console.log("error signing out")
  });
}  
