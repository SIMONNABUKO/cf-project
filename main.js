// var firebaseConfig = {
//   apiKey: 'AIzaSyCdRVavRpo5G1P6hZkRMj21FjmGM5LDVpk',
//   authDomain: 'cf-forms.firebaseapp.com',
//   databaseURL: 'https://cf-forms.firebaseio.com',
//   projectId: 'cf-forms',
//   storageBucket: 'cf-forms.appspot.com',
//   messagingSenderId: '930856768039',
//   appId: '1:930856768039:web:cc8abe694651113bf1b402',
//   measurementId: 'G-R3MCCF1M5M'
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

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
    var formData = this.getFormData();
    var formDataSerialized = this.getFormData(true);
    console.log('Formdata:', formData);
    console.log('Formdata, serialized:', formDataSerialized);
  }
});
