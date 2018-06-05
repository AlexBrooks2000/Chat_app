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
    console.log(displayName);
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
  $("#mainChat").append(username + "<p>: </p>" + chats + "<p>\n</p>")
});


/*chat.on('value', function(datasnapshot) {
  mainChat.innerText = datasnapshot.val();
});*/

function addMessage() {
  var inputMessage = document.getElementById("input").value;
  var name = firebase.auth().currentUser;
  firebase.database().ref().child("messages").push().set({
    message: inputMessage,
    user: name
  });
  console.log("added to database");
}
