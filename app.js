const form = document.getElementById('form');
const username = document.getElementById('username');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

//Show input error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className =  "form-control error" // agregando las clases 
   
    const small =  formControl.querySelector("small");
    small.innerText = message;

}
//check email is valid 
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, "Email is not valid ")
    }
}

//Check password matc
function checkPasswordMatch(input1, input2){
if (input1.value !== input2.value){
    showError(input2, "password do not match");
    
}  else {
    showSuccess(input2, input1);
    // showSuccess(input1);

}}


//show Success online
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

//Checlk required fields
//usarmos forEach para iterar en el array sin tener que usar un bucle 
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if ( input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
            //`${getFieldName(input)} is required`) impremi el mensaje pero estamos pasando una funcion para hacer la primera letra mayuscula 
        }
    });
}

//Check lenght
function checkLenght( input, min, max ) {
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if ( input.value.length > max ){
        showError(input, `${getFieldName(input)} must be less than ${max}`);
    }
    else{
        showSuccess(input);
    }

}

//Get fieldName
//poner primera letra en mayuscula charAt(0) indica la posicion toUpperCase() lleva a mayuscula 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event liseteners
form.addEventListener('submit', function(e) {
    //evitar recargar la pagina
    e.preventDefault();  
    //pasamos el array para no tener que llamar la funcion varias veces 
    //checkRequired(username), checkRequired(email) etc ...
    checkRequired([username, email, password, password2])
    checkLenght(username, 3, 15);
    checkLenght(password, 6, 25);
    checkEmail(email)
    checkPasswordMatch(password, password2);

} )




















//validation 


// if ( username.value === ""){
//     showError(username, "Username is required");
// } else {
//     showSuccess(username);
// }

// if ( email.value === ""){
//     showError(email, "Email is required");
//     } else if( !isValidEmail ( email.value )) {
//         showError(email, "Email is not valid")
    
// } else {
//     showSuccess(email);
// }

// if ( password.value === ""){
//     showError(password, "password is required");
// } else {
//     showSuccess(password);
// }


// if ( password2.value === ""){
//     showError(password2, "password 2 is required");
// } else {
//     showSuccess(password2);
// }

