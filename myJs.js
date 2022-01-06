var fields = {};
$(document).ready(function () {
    const addToDom = () =>{
    $('#navbar').append(
        $('<ul>').attr('class', "nav justify-content-center").attr('id', 'addToo')
    );
    $('#addToo').append(
        $('<li>').append($('<a>').attr('href', '#about').text("About")),
        $('<li>').append($('<a>').attr('href', '#previousWork').text("Previous Work")),
        $('<li>').append($('<a>').attr('href', '#projects').text("Projects")),
        $('<li>').append($('<a>').attr('href', '#contact').text("Contact"))

    );
    }
    addToDom();
});

function getDomEle() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
}

function isNotEmpty(value) {
    if(value == null || typeof value == 'undefined') 
        return false;
    return(value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(String(email).toLowerCase());
}

function isValid(fields) {
    var nameCheck;
    var emailCheck1;
    var emailCheck2;
    var messageCheck;

    nameCheck = isNotEmpty(fields.name.value);
    emailCheck1 = isNotEmpty(fields.email.value);
    emailCheck2 = isEmail(fields.email.value);
    messageCheck = isNotEmpty(fields.message.value);

    if(nameCheck, emailCheck1, emailCheck2, messageCheck)
        return true;
    else 
        return false;
}

function sendContact(){
    getDomEle();
    if(isValid(fields)){
        alert('$(fields.name.value} thanks for contacting')
        console.log(fields);
    }
    else{
        alert('An error occured');
    }
}

function sendMail() {
    var link = "mailto:stormcrozier950@gmail.com"
             + "?cc="
             + "&subject=" + encodeURIComponent("Message From Website")
             + "&body=" + encodeURIComponent(document.getElementById('name').value)
             + encodeURIComponent("\n")
             + encodeURIComponent(document.getElementById('email').value)
             + encodeURIComponent("\n")
             + encodeURIComponent(document.getElementById('message').value);
    
    
    window.location.href = link;
}