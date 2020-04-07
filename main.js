document.getElementById('test').innerHTML = "Test je";

if(form.password.value === form.password2.value){
    return true;
}else{
    alert("Password not match");
    return false;
}