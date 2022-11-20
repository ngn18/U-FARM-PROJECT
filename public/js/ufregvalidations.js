const Validate = () => {
    var uniquenumber = document.getElementById('uniquenumber');
    var ward = document.getElementById('ward');
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var dateofbirth = document.getElementById('dateofbirth');
    // var gender = document.getElementById('gender');  
    var nin = document.getElementById('nin');
    var telephone = document.getElementById('telephone');
    // var activity = document.getElementById('activity');
    var regdate = document.getElementById('regdate');
    var role = document.getElementById('role');
    var password = document.getElementById('password');
    var passwordAgain = document.getElementById('passwordagain');

    var uniquenumberError = document.getElementById('uniquenumberError');
    var wardError = document.getElementById('wardError');
    var firstnameError = document.getElementById('firstnameError');
    var lastnameError = document.getElementById('lastnameError');
    var dateofbirthError = document.getElementById('dateofbirthError');
    // var genderError = document.getElementById('genderError');
    var ninError = document.getElementById('ninError');
    var telephoneError = document.getElementById('telephoneError');
    // var activityError = document.getElementById('activityError');
    var regdateError = document.getElementById('regdateError');
    var roleError = document.getElementById('roleError');
    var passwordError = document.getElementById('passwordError');
    var passwordAgainError = document.getElementById('passwordagainError');
    


    // Validating the unique number
    const ufregex = /^UF-([0-9]{3})+$/; // Farmer One unique number.
    const alphregex = /^[A-Za-z]+$/; // Alphabets regular expression.
    const ninregex = /^[0-9a-zA-Z]+$/; // Alphanumeric regular expression.
    const telregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ // Regular expression for the phone number.
    const numregex = /^[0-9]+$/ // Regular expression for numbers only

    if(uniquenumber.value == '') {
        uniquenumber.style.border = '2px solid red';
        uniquenumberError.textContent = 'Please enter unique number';
        uniquenumberError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(uniquenumber.value.match(ufregex))) {
        uniquenumber.style.border = '2px solid red';
        uniquenumberError.textContent = 'Unique number format incorrect';
        uniquenumberError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        uniquenumber.style.border = '2px solid green';
        uniquenumberError.textContent = '';
    }


    if(ward.value == '') {
        ward.style.border = '2px solid red';
        wardError.textContent = 'Please select ward';
        wardError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else if(ward.value == 'notspecified') {
        ward.style.border = '2px solid red';
        wardError.textContent = 'Please specify ward';
        wardError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        ward.style.border = '2px solid green';
        wardError.textContent = '';
    }

    if(firstname.value == '') {
        firstname.style.border = '2px solid red';
        firstnameError.textContent = 'Please input your first name';
        firstnameError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else if(!(firstname.value.match(alphregex))) {
        firstname.style.border = '2px solid red';
        firstnameError.textContent = 'Please use correct format';
        firstnameError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        firstname.style.border = '2px solid green';
        firstnameError.textContent = '';
    }

    if(lastname.value == '') {
        lastname.style.border = '2px solid red';
        lastnameError.textContent = 'Please input your last name';
        lastnameError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else if(!(lastname.value.match(alphregex))) {
        lastname.style.border = '2px solid red';
        lastnameError.textContent = 'Please use correct format';
        lastnameError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        lastname.style.border = '2px solid green';
        lastnameError.textContent = '';
    }

    if(dateofbirth.value == '') {
        dateofbirth.style.border = '2px solid red';
        dateofbirthError.textContent = 'Please enter date of birth';
        dateofbirthError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        dateofbirth.style.border = '2px solid green';
        dateofbirthError.textContent = '';
    }

    // if(gender.value == '') {
    //     gender.style.border = '2px solid red';
    //     genderError.textContent = 'Please select a field';
    //     genderError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
    //     return false;
    // } else {
    //     gender.style.border = '2px solid green';
    //     genderError.textContent = '';
    // }

    if(nin.value == '') {
        nin.style.border = '2px solid red';
        ninError.textContent = 'Please enter nin';
        ninError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(nin.value.match(ninregex))) {
        nin.style.border = '2px solid red';
       ninError.textContent = 'nin format incorrect';
        ninError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        nin.style.border = '2px solid green';
        ninError.textContent = '';
    }

    if(telephone.value == '') {
        telephone.style.border = '2px solid red';
        telephoneError.textContent = 'Please enter phone number';
        telephoneError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(telephone.value.match(telregex))) {
        telephone.style.border = '2px solid red';
        telephoneError.textContent = 'Phone number format incorrect';
        telephoneError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        telephone.style.border = '2px solid green';
        telephoneError.textContent = '';
    }

    // if(activity.value == '') {
    //     activity.style.border = '2px solid red';
    //     activityError.textContent = 'Please select an activity';
    //     activityError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
    //     return false;
    // } else {
    //     activity.style.border = '2px solid green';
    //     activityError.textContent = '';
    // }

    if(regdate.value == '') {
        regdate.style.border = '2px solid red';
        regdateError.textContent = 'Please enter the date of registration';
        regdateError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        regdate.style.border = '2px solid green';
        regdateError.textContent = '';
    }

    if(role.value == '') {
        role.style.border = '2px solid red';
        roleError.textContent = 'Please select a field';
        roleError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        role.style.border = '2px solid green';
        roleError.textContent = '';
    }

    if(password.value == '') {
        password.style.border = '2px solid red';
        passwordError.textContent = 'Please input password';
        passwordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(password.value.length < 5) {
        password.style.border = '2px solid red';
        passwordError.textContent = 'Should have more than 5 characters';
        passwordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(password.value.length > 16) {
        password.style.border = '2px solid red';
        passwordError.textContent = 'Should have less than 16 characters';
        passwordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        password.style.border = '2px solid green';
        passwordError.textContent = '';
    }

    if(passwordAgain.value == '') {
        passwordAgain.style.border = '2px solid red';
        passwordAgainError.textContent = 'Please input password';
        passwordAgainError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(passwordAgain.value === password.value)) {
        passwordAgain.style.border = '2px solid red';
        passwordAgainError.textContent = 'Passwords do not match';
        passwordAgainError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        passwordAgain.style.border = '2px solid green';
        passwordAgainError.textContent = '';
    }
    

    // let pass_wrd = password.value;
    // let confirm_pwd = passwordAgain.value;

    // if(password.value == '' || passwordAgain.value == ''){
    //     alert('Password cannot be empty');
    //     password.style.border = '4px solid red';
    //     passwordAgain.style.border = '4px solid red';
    //     return false;
    // }

    // if(password.value != passwordAgain.value){
    //     alert('Passwords do not match');
    //     password.style.border = '4px solid red';
    //     passwordAgain.style.border = '4px solid red';
    //     return false;
    // }

};