var database = firebase.database();
var chat = firebase.database().ref().child("messages");

chat.on("child_added", function(childSnapshot){
  chat = childSnapshot.val();
  $("#mainChat").html(chat.mainChat)
  $("#link").attr("href", chat.link)
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
