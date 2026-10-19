let playerState = "notPlaying";
let points = 0;
let variable = null

function gameStart() {
    // setting game up
    points = 0;
    playerState = "playing" ;
    document.getElementById("gameText").textContent = "Restart";
    document.body.style.cssText = "background-color: rgb(178, 192, 214);";
    document.getElementById("score").textContent = "Points: " + points;
    // I don't feel like shortening the next few lines so bear with me
    document.getElementById("one").src = "images/empty.png";
    document.getElementById("two").src = "images/empty.png";
    document.getElementById("three").src = "images/empty.png";
    document.getElementById("four").src = "images/empty.png";
    document.getElementById("five").src = "images/empty.png";
    document.getElementById("six").src = "images/empty.png";
    document.getElementById("seven").src = "images/empty.png";
    document.getElementById("eight").src = "images/empty.png";
    document.getElementById("nine").src = "images/empty.png";
    // set up done, wooooo

    function actualGame() {
        if (playerState !== "playing") {
            return;
        }

            let thing = Math.floor(Math.random()*9) + 1;
            if (thing == 1) {
                variable = "one"
            }

            else if (thing == 2) {
                variable = "two"
            }

            else if (thing == 3) {
                variable = "three"
            }

            else if (thing == 4) {
                variable = "four"
            }

            else if (thing == 5) {
                variable = "five"
            }

            else if (thing == 6) {
                variable = "six"
            }

            else if (thing == 7) {
                variable = "seven"
            }

            else if (thing == 8) {
                variable = "eight"
            }

            else if (thing == 9) {
                variable = "nine"
            }
                let number = Math.floor(Math.random()*21);
                if (number < 17) {
                    document.getElementById(variable).src = "images/evilSheldon.png";
                    console.log("evilSheldon appeared at " + variable)
                }
                else {
                    document.getElementById(variable).src = "images/brisket.gif";
                    console.log("25% chance brisket appeared at " + variable)

                    let brisketEmpty = variable;
                    setTimeout(() => {
                        console.log("brisket gone");
                        document.getElementById(brisketEmpty).src = "images/empty.png";
                    }, 3000);
                }
        setTimeout(actualGame, Math.floor(Math.random()*3000)+1000)
    }

    actualGame();
}

function hit(img) {
    if (playerState !== "playing") {
        return;
    }

    if (img.src.includes("images/brisket.gif")) {
        playerState = "notPlaying"
        document.body.style.cssText = "background-color: red;";
        document.getElementById("gameText").textContent = "Game over! Try again?";
    }

    else if (img.src.includes("images/evilSheldon.png")) {
        points += 1;
        document.getElementById("score").textContent = "Points: " + points;
        img.src = "images/empty.png";
     }

    else if (img.src.includes("images/empty.png")) {
        img.src = "images/evilSheldon.png";
        // seperate test
    }

}