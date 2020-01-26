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
      'Thank you for your time, we will contact you soon'
    );
  }
});
