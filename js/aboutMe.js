$( window ).on( "load", function() {
    $("#about p:first").text("Hi! My name is David, proud owner of two cats. Flamingo and Oreo. Their names correspond with their colors. 🐈")
    $("#about p:last").text("I love spending my free time with code. Creating various projects, also I love to help others. 😀");
    $("#about p").click(function(){
        $(this).css("background-color","powderblue");
        $(this).css("color","white");
    })
});