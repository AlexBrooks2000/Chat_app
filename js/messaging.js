var database = firebase.database();
var chatRef = firebase.database().ref().child("messages");
chatRef.on("child_added", snap => {
  var chats = snap.child("message").val();
  $("#mainChat").append(chats + "<p>\n</p>")
});


chat.on('value', function(datasnapshot) {
  mainChat.innerText = datasnapshot.val();
});

function addMessage() {
  var inputMessage = document.getElementById("input").value;
  firebase.database().ref().child("messages").push().set({
    message: inputMessage
  });
  console.log("added to database");
}
