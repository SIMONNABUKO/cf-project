var firebaseConfig = {
  apiKey: 'AIzaSyCdRVavRpo5G1P6hZkRMj21FjmGM5LDVpk',
  authDomain: 'cf-forms.firebaseapp.com',
  databaseURL: 'https://cf-forms.firebaseio.com',
  projectId: 'cf-forms',
  storageBucket: 'cf-forms.appspot.com',
  messagingSenderId: '930856768039',
  appId: '1:930856768039:web:cc8abe694651113bf1b402',
  measurementId: 'G-R3MCCF1M5M'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userInfoRef = firebase.database().ref('userInformation');

new cf.ConversationalForm({
  formEl: document.querySelector('#form'),
  theme: 'blue',
  userImage: '',
  robotImage: '',
  userInterfaceOptions: {
    robot: {
      robotResponseTime: 1500,
      chainedResponseTime: 400
    },
    user: {
      showThinking: true,
      showThumb: true
    }
  },
  submitCallback: function() {
    this.addRobotChatResponse(
      'Thank you for your details, we will get back to you soon'
    );
    var userDetails = this.getFormData(true);
    var firstname = userDetails.firstname;
    var lastname = userDetails.lastname;
    var gender = userDetails.gender[0];
    var email = userDetails.email;
    var phone = userDetails.phone;
    var continent = userDetails.continent[0];
    var animal = userDetails.animal;
    var age = userDetails.age[0];
    var details = userDetails.details;

    userInfo = {
      firstname,
      lastname,
      gender,
      email,
      phone,
      continent,
      animal,
      age,
      details
    };
    userInfoRef.push(userInfo);
    console.log('User Details', userDetails);
    console.log('User Information', userInfo);
  }
});
