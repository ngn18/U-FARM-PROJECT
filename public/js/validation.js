// const uniqueNumber = document.registration.uniquenumber;
// const ward = document.registration.ward;
// const firstName = document.registration.firstname;
// const lastName = document.registration.lastname;
// const dateOfBirth = document.registration.dateofbirth;
// const nin = document.registration.nin;
// const phoneNumber = document.registration.telephone;
// const farmingActivity = document.registration.activity;
// const registrationDate = document.registration.regdate;
// const password = document.registration.password1;
// const passwordAgain = document.registration.password2;


// const checkUniqueNumber = () => {
//     let validateUniqueNumber = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//     if(uniqueNumber.value === ''){
//         uniqueNumber.style.border = '4px solid red'
//         uniqueNumber.focus();
//     }

//     if(uniqueNumber.value.match(validateUniqueNumber)){
//         uniqueNumber.style.border = '4px solid green';
//         ward.focus();
//     } else {
//         uniqueNumber.style.border = '4px solid red';
//         uniqueNumber.focus();
//     }
// };

// const checkWard = () => {
//     let validateWard =  /^[0-9a-zA-Z]+$/;

//     if(ward.value === ''){
//         ward.style.border = '4px solid red'
//         ward.focus();
//     }

//     if(ward.value.match(validateWard)){
//         ward.style.border = '4px solid green';
//         firstName.focus();
//     } else {
//         ward.style.border = '4px solid red';
//         ward.focus();
//     }
// };

// const checkFirstName = () => {
//     let validateFirstName =  /^[0-9a-zA-Z]+$/;

//     if(firstName.value === ''){
//         firstName.style.border = '4px solid red'
//         firstName.focus();
//     }

//     if(firstName.value.match(validateFirstName)){
//         firstName.style.border = '4px solid green';
//         lastName.focus();
//     } else {
//         firstName.style.border = '4px solid red';
//         firstName.focus();
//     }
// };

// const checkLastName = () => {
//     let validateLastName =  /^[0-9a-zA-Z]+$/;

//     if(lastName.value === ''){
//         lastName.style.border = '4px solid red'
//         lastName.focus();
//     }

//     if(lastName.value.match(validateLastName)){
//         lastName.style.border = '4px solid green';
//         dateOfBirth.focus();
//     } else {
//         lastName.style.border = '4px solid red';
//         lastName.focus();
//     }
// };

// const checkDateOfBirth = () => {
//     let validateDateOfBirth =  /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

//     if(dateOfBirth.value === ''){
//         dateOfBirth.style.border = '4px solid red'
//         dateOfBirth.focus();
//     }

//     if(dateOfBirth.value.match(validateDateOfBirth)){
//         dateOfBirth.style.border = '4px solid green';
//         nin.focus();
//     } else {
//         dateOfBirth.style.border = '4px solid red';
//         dateOfBirth.focus();
//     }
// };

// const checkNin = () => {
//     let validateNin =  /^[0-9]+$/;

//     if(nin.value === ''){
//         nin.style.border = '4px solid red'
//         nin.focus();
//     }

//     if(nin.value.match(validateNin)){
//         nin.style.border = '4px solid green';
//         phoneNumber.focus();
//     } else {
//         nin.style.border = '4px solid red';
//         nin.focus();
//     }
// };

// const checkPhoneNumber = () => {
//     let validatePhoneNumber = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

//     if(phoneNumber.value === ''){
//         phoneNumber.style.border = '4px solid red'
//         phoneNumber.focus();
//     }

//     if(phoneNumber.value.match(validatePhoneNumber)){
//         phoneNumber.style.border = '4px solid green';
//         farmingActivity.focus();
//     } else {
//         phoneNumber.style.border = '4px solid red';
//         phoneNumber.focus();
//     }
// };

// const checkFarmingActivity = () => {
//     let validateFarmingActivity = /^[A-Za-z]+$/;

//     if(farmingActivity.value === ''){
//         farmingActivity.style.border = '4px solid red'
//         farmingActivity.focus();
//     }

//     if(farmingActivity.value.match(validateFarmingActivity)){
//         farmingActivity.style.border = '4px solid green';
//         registrationDate.focus();
//     } else {
//         farmingActivity.style.border = '4px solid red';
//         farmingActivity.focus();
//     }
// };

// const checkRegDate = () => {
//     let validateRegDate = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

//     if(registrationDate.value === ''){
//         registrationDate.style.border = '4px solid red'
//         registrationDate.focus();
//     }

//     if(registrationDate.value.match(validateRegDate)){
//         registrationDate.style.border = '4px solid green';
//         password.focus();
//     } else {
//         registrationDate.style.border = '4px solid red';
//         registrationDate.focus();
//     }
// };

// const checkPassword = () => {
//     let pass_wrd = password.value;
//     let confirm_pwd = passwordAgain.value;

//     if(pass_wrd == '' || confirm_pwd == ''){
//         alert('Password cannot be empty');
//         password.style.border = '4px solid red';
//         passwordAgain.style.border = '4px solid red';
//         return false;
//     }

//     if(pass_wrd != confirm_pwd){
//         alert('Passwords do not match');
//         password.style.border = '4px solid red';
//         passwordAgain.style.border = '4px solid red';
//         return false;
//     }
// };



const Validate = () => {
    var uniquenumber = document.getElementById('uniquenumber');
    var ward = document.getElementById('ward');
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var dateofbirth = document.getElementById('dateofbirth');
    var gender = document.getElementById('gender');  
    var nin = document.getElementById('nin');
    var telephone = document.getElementById('telephone');
    var activity = document.getElementById('activity');
    var regdate = document.getElementById('regdate');
    var directions = document.getElementById('directions');
    var residence = document.getElementById('residence');
    var yearsofresidence = document.getElementById('yearsofresidence');
    var role = document.getElementById('role');
    var password = document.getElementById('password');
    var passwordagain = document.getElementById('passwordagain');

    var uniquenumberError = document.getElementById('uniquenumberError');
    var wardError = document.getElementById('wardError');
    var firstnameError = document.getElementById('firstnameError');
    var lastnameError = document.getElementById('lastnameError');
    var dateofbirthError = document.getElementById('dateofbirthError');
    var genderError = document.getElementById('genderError');
    var ninError = document.getElementById('ninError');
    var telephoneError = document.getElementById('telephoneError');
    var activityError = document.getElementById('activityError');
    var regdateError = document.getElementById('regdateError');
    var directionsError = document.getElementById('directionsError');
    var residenceError = document.getElementById('residenceError');
    var yearsofresidenceError = document.getElementById('yearsofresidenceError');
    var roleError = document.getElementById('roleError');
    var passwordError = document.getElementById('passwordError');
    var passwordagainError = document.getElementById('passwordagainError');
    


    // Validating the unique number
    const foregex = /^FO-([0-9]{3})+$/; // Farmer One unique number.
    const alphregex = /^[A-Za-z]+$/; // Alphabets regular expression.
    const ninregex = /^[0-9a-zA-Z]+$/; // Alphanumeric regular expression.
    const telregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ // Regular expression for the phone number.
    const numregex = /^[0-9]+$/ // Regular expression for numbers only

    if(uniquenumber.value == '') {
        uniquenumber.style.border = '2px solid red';
        uniquenumberError.textContent = 'Please enter unique number';
        uniquenumberError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(uniquenumber.value.match(foregex))) {
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

    if(gender.value == '') {
        gender.style.border = '2px solid red';
        genderError.textContent = 'Please select a field';
        genderError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        gender.style.border = '2px solid green';
        genderError.textContent = '';
    }

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

    if(activity.value == '') {
        activity.style.border = '2px solid red';
        activityError.textContent = 'Please select an activity';
        activityError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(activity.value.match(alphregex))) {
        activity.style.border = '2px solid red';
        activityError.textContent = 'Incorrect format. Please use alphabets only.';
        activityError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        activity.style.border = '2px solid green';
        activityError.textContent = '';
    }

    if(regdate.value == '') {
        regdate.style.border = '2px solid red';
        regdateError.textContent = 'Please enter the date of registration';
        regdateError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;"
        return false;
    } else {
        regdate.style.border = '2px solid green';
        regdateError.textContent = '';
    }

    if(directions.value == '') {
        directions.style.border = '2px solid red';
        directionsError.textContent = 'Please fill in the directions field';
        directionsError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(directions.value.match(alphregex))) {
        directions.style.border = '2px solid red';
        directionsError.textContent = 'Incorrect format. Please use alphabets only.';
        directionsError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        directions.style.border = '2px solid green';
        directionsError.textContent = '';
    }

    if(residence.value == '') {
        residence.style.border = '2px solid red';
        residenceError.textContent = 'Please select an option';
        residenceError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        residence.style.border = '2px solid green';
        residenceError.textContent = '';
    }

    if(yearsofresidence.value == '') {
        yearsofresidence.style.border = '2px solid red';
        yearsofresidenceError.textContent = 'Please fill in the missing information';
        yearsofresidenceError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(yearsofresidence.value.match(numregex))) {
        yearsofresidence.style.border = '2px solid red';
        yearsofresidenceError.textContent = 'Incorrect format. Please use numbers only.';
        yearsofresidenceError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        yearsofresidence.style.border = '2px solid green';
        yearsofresidenceError.textContent = '';
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

    if(passwordagain.value == '') {
        passwordagain.style.border = '2px solid red';
        passwordagainError.textContent = 'Please input password';
        passwordagainError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else if(!(passwordagain.value === password.value)) {
        passwordagain.style.border = '2px solid red';
        passwordagainError.textContent = 'Passwords do not match';
        passwordError.style = "color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;";
        return false;
    } else {
        passwordagain.style.border = '2px solid green';
        passwordagainError.textContent = '';
    }
    
};