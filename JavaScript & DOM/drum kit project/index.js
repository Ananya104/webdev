// detecting button press

function makeSound(key) {
    switch (key) {
        case "j": var tom3 = new Audio('tom-3.mp3');
        tom3.play();
        break;

    case "k": var tom4 = new Audio('tom-4.mp3');
        tom4.play();
        break;

    case "l": var tom1 = new Audio('tom-1.mp3');
        tom1.play();
        break;

    case "w": var crash = new Audio('crash.mp3');
        crash.play();
        break;

    case "a": var kick = new Audio('kick-bass.mp3');
        kick.play();
        break;

    case "s": var snare = new Audio('snare.mp3');
        snare.play();
        break;

    case "d": var tom2 = new Audio('tom-2.mp3');
        tom2.play();
        break;

    default: console.log(key);
    }
    
}




for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
    function playSound() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

       
        }
}
    
//detecting key presses


document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key);
});

// adding animation to key&mouse clicks

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () { activeButton.classList.remove("pressed") }, 100);
}


