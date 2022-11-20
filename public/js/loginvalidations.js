const Validate = () => {
    
    var uniqueNumber = document.getElementById('uniquenumber');
    var Password = document.getElementById('password');

    var uniqueNumberError = document.getElementById('uniquenumberError');
    var PasswordError = document.getElementById('passwordError');

    // Validating the unique number
    const foregex = /^FO-([0-9]{3})+$/; // Farmer One unique number.

    if(uniqueNumber.value == '') {
        uniqueNumber.style.border = '2px solid red';
        uniqueNumberError.textContent = 'Please enter unique number';
        uniqueNumberError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(uniqueNumber.value.match(foregex))) {
        uniqueNumber.style.border = '2px solid red';
        uniqueNumberError.textContent = 'Unique number format incorrect';
        uniqueNumberError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        uniqueNumber.style.border = '2px solid green';
        uniqueNumberError.textContent = '';
    }

    if(Password.value == '') {
        Password.style.border = '2px solid red';
        PasswordError.textContent = 'Please input password';
        PasswordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(Password.value.length < 5) {
        Password.style.border = '2px solid red';
        PasswordError.textContent = 'Should have more than 5 characters';
        PasswordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(Password.value.length > 16) {
        Password.style.border = '2px solid red';
        PasswordError.textContent = 'Should have less than 16 characters';
        PasswordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        Password.style.border = '2px solid green';
        PasswordError.textContent = '';
    }   
};