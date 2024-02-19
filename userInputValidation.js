import inquirer from 'inquirer';

const questions = inquirer.prompt([
  {
    type: "input",
    name: "userName",
    message: "Enter your name-"
  },
  {
    type: "input",
    name: "phoneNumber",
    message: "Enter your phone number-",
    validate: function (inputValue) {
      let val = inputValue.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
      if (val) {
        return true;
      }
      return "please enter valid phone number-";
    }
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email-",
    validate: function (inputValue) {
      let val = inputValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (val) {
        return true;
      }
      return "please enter valid email address-";
    }
  },
  {
    type: "input",
    name: "address",
    message: "Enter your address-"
  }
]);

questions.then(answers => {
  console.log(answers);
}).catch(error => {
  console.error(error);
});

/*OUTPUT
? Enter your name. nency   
? Enter your phone number. 9123354637
? Enter your email. nencyrabadiya@gmail.com
? Enter your address. surat
{
  userName: 'nency',
  phoneNumber: '9123354637',
  email: 'nencyrabadiya@gmail.com',
  address: 'surat'
}
*/
