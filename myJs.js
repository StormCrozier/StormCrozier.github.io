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
