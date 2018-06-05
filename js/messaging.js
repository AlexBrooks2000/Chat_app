var database = firebase.database();
var chatRef = firebase.database().ref().child("messages");
chatRef.on("child_added", snap => {
  var chats = snap.child("message").val();
  $("#mainChat").append(chats + "<p>\n</p>")
});


/*chat.on('value', function(datasnapshot) {
  mainChat.innerText = datasnapshot.val();
});*/

function addMessage() {
  var inputMessage = document.getElementById("input").value;
  firebase.database().ref().child("messages").push().set({
    message: inputMessage
  });
  console.log("added to database");
}

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
  } else {
    // User is signed out.
    console.log("user is logged out");
  }
});
