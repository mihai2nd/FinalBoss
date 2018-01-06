import { Meteor } from 'meteor/meteor';
import './register.html';

Template.register.onCreated(function () {
  Meteor.subscribe('links.all');
});


Template.register.helpers({

});

Template.register.events({
  'submit form': function(event,template) {
    event.preventDefault();

    var emailVar = template.find('#email_1').value;
    var passwordVar = template.find('#password_1').value;
    var passwordVarC = template.find('#password_c1').value;

    if(passwordVar === passwordVarC)
      {
        Accounts.createUser({
        email:emailVar,
        password: passwordVar
        });
        console.log("Account created with succes !");
      }
    else
    {
      console.log("Passwords are not the same. Try again.");
    }

  }
});
