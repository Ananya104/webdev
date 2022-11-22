//selecting elements

$("button").css("color", "blue");
$("h1").css("color", "darkblue");
$("body").css("background-color", "aqua");

//adding classes

$("h2").addClass("new");

//manipulating text

$("h1").text("Bye");  //doesnt consider html
$("h1").html("<mark>Bye</mark>");  //considers html too.

//manipulating attributes
$("a").attr("href", "https://www.gog.com");  //changes href attached to anchor tag

//adding and removing elements

$("h1").after("<h1>This is my new H1</h1>"); //we have before,prepend and append also.

//adding event listeners and animation

$("h1").click(function () {
    $("button").hide().animate({opacity:0.5});
})





