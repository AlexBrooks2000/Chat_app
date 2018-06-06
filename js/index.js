//user sign in
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'messaging.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: 'sign_in.html'
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
//end of user sign in

/*//user sign out
firebase.auth().signOut().then(function() {
  console.log("user signed out")
}).catch(function(error) {
  console.log("error signing out")
});
//end of user sign out
*/
