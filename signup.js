var firebaseConfig = {
  apiKey: "AIzaSyDBb0wp4eLNQ591g-y_2x9zwzlFVIuzdcg",
  authDomain: "login-ea8e7.firebaseapp.com",
  databaseURL: "https://login-ea8e7.firebaseio.com",
  projectId: "login-ea8e7",
  storageBucket: "login-ea8e7.appspot.com",
  messagingSenderId: "398050071196",
  appId: "1:398050071196:web:9306c1301729c5016f1359"
};
// Initialize Firebase

var firestore = firebase.firestore();

const submitBtn = document.querySelector("#Register");
  let Firstname = document.querySelector("#fn");
  let Lastname = document.querySelector("#ln");
  let emailid = document.querySelector("#emailid");
  //let dob = document.querySelector("#mydate");
  

  const db = firestore.collection("details");

  submitBtn.addEventListener('click', function(){
      
      let firstnameInput =Firstname.value;
      let lastnameInput =Lastname.value;
      let emailidInput =emailid.value;
      //let dobInput =dob.value;
      


      //access the db collection
      db.add({
          
          firstname:  firstnameInput,
          lastname:lastnameInput,
          emailid:emailidInput,
         // dob:dobInput,

          
      }).then(function(){
          console.log("Data Saved")
      }).catch(function(error){
          console.log(error);
      });
      
      
  });