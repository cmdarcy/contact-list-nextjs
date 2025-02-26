export function validateFormInputs(testName, testEmail, testPhoneNum) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const alerts = {
    emptyFields:
      'Name and Phone Fields must not be empty space, please try again!',
    invalidEmail: 'Email is invalid please try again!',
    invalidPhone: 'Phone Number is invalid please try again!',
  };

  if (testName.trim() === '' || testPhoneNum.trim() === '') {
    alert(alerts.emptyFields);
    return false;
  }
  if (!emailRegex.test(testEmail)) {
    alert(alerts.invalidEmail);
    return false;
  }
  if (!phoneRegex.test(testPhoneNum)) {
    alert(alerts.invalidPhone);
    return false;
  }
  return true;
}
