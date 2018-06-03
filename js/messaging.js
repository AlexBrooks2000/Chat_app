const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log("have permission");
  return messaging.getToken()
})
.then(function(token) {
  console.log(token);
})
.catch(function(err){
  console.log("error occured");
})

messaging.onMessage(function(payload) {
  console.log("onMessage: ", payload)
});
//retrieving registration token
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function(currentToken) {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch(function(err) {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
});
//end of retreiving registration token
