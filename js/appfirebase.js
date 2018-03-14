// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAdmzqFVtpohujwlCI0hqI7XwTeN5qmuvY",
    authDomain: "twitterv2-6b786.firebaseapp.com",
    databaseURL: "https://twitterv2-6b786.firebaseio.com",
    projectId: "twitterv2-6b786",
    storageBucket: "twitterv2-6b786.appspot.com",
    messagingSenderId: "221643658475"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  var provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
