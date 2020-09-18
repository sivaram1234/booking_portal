var firebaseConfig = {
    apiKey: "AIzaSyC7bUBBquMKv7cIzvAtPqLxnxJaQ42uVdI",
    authDomain: "iitbbsportal.firebaseapp.com",
    databaseURL: "https://iitbbsportal.firebaseio.com",
    projectId: "iitbbsportal",
    storageBucket: "iitbbsportal.appspot.com",
    messagingSenderId: "298160521753",
    appId: "1:298160521753:web:34bdfcfbfb710f6a4b6088",
    measurementId: "G-BQMMYH80GR"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//vol

var messagesRef = firebase.database().ref('Booking_data');
  
// Listen for form submit

// Submit form
function submitForm(){
    console.log("entered submit function");
//   e.preventDefault();

  // Get values
  var type="cc"
  var name = "ram";
  var age = "";
  var email = getInputVal('mail');
  var phone = "num";

  // Save message
  saveMessage(type,name,age,email, phone);
}

// Save message to firebase
function saveMessage(type,name,age,email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    type:type,
    name: name,
    age:age,
    email:email,
    phone:phone,
    
  });

}
