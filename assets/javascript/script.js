let body = document.body;

const cpuArray = ["rock", "paper", "scissors", "lizard", "spock"];



//listener for start menu button
let myClick = document.getElementById('startbtn');
myClick.addEventListener('click', gameChoices);


/**
 * This function will remove the Start menu and create the game interface
*/
function gameChoices() {
    let titlebar = document.getElementById('mainscreentitle');
    titlebar.remove();
    let start = document.getElementById('start');
    start.remove();

    if (myClick) {

        //The game interface will be created if when start button is pressed
        let createMenu = document.createElement("section");
        //will add class to section 
        createMenu.classList.add("scoreboard");
        createMenu.innerHTML = ` <section id="scoreboard">
        <div id="numofwins">Wins: <span id="score">0</span></div>
        
        
    </section>
    
    
    <div id="main-window"></div>
    
    
    <div id="choice-panel">
    
    
    <button type="submit" class="choices" id="rock"><i class="fa-regular fa-hand-back-fist"></i></button>
    
    
    <button type="submit" class="choices" id="paper"><i class="fa-regular fa-hand"></i></button>
    
    
    <button type="submit" class="choices" id="scissors"><i class="fa-regular fa-hand-scissors"></i></button>
    
    
    <button type="submit" class="choices" id="lizard"><i class="fa-regular fa-hand-lizard"></i></button>
    
    
    <button type="submit" class="choices" id="spock"><i class="fa-regular fa-hand-spock"></i></button>
    
    
    </div>`;

        body.appendChild(createMenu);
        let backdiv = document.createElement("div");
        backdiv.setAttribute('id', 'backdiv');
        body.appendChild(backdiv);
        body.appendChild(createMenu);
    }

    //will get the choice from player and call the pickChocie function
    let cClick = document.getElementsByClassName('choices');
    for (let i = 0; i < cClick.length; i++) {
        cClick[i].addEventListener('click', pickChoice);
    }

    document.getElementById("numofwins").appendChild();

}


/**
 * This function will add the player choice to the main window div and display it on screen
*/
function pickChoice() {
    let = picked = "";

    if (this.getAttribute('id') === "rock") {
        document.getElementById('main-window').innerHTML = `<i id="uno" class="fa-regular fa-hand-back-fist "></i>`;
        picked += "rock";
        compareChoices();

    } else if (this.getAttribute('id') === "paper") {
        document.getElementById('main-window').innerHTML = `<i id="dos" class="fa-regular fa-hand"></i>`;
        picked += "paper";
        compareChoices();

    } else if (this.getAttribute('id') === "scissors") {
        document.getElementById('main-window').innerHTML = `<i id="tres" class="fa-regular fa-hand-scissors"></i>`;
        picked += "scissors";
        compareChoices();

    } else if (this.getAttribute('id') === "lizard") {
        document.getElementById('main-window').innerHTML = `<i id="cuatro" class="fa-regular fa-hand-lizard"></i>`;
        picked += "lizard";
        compareChoices();

    } else if (this.getAttribute('id') === "spock") {
        document.getElementById('main-window').innerHTML = `<i id="cinco" class="fa-regular fa-hand-spock"></i>`;
        picked += "spock";
        compareChoices();
    }

}





/**
 * This Function will pick from the array variable declared above and pick a random one.
 */
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


/**
 * This Function will take the value from the user's choice and compare it to the random value and  display the choice on screen
 */

function compareChoices() {
    //calls random number funciton
    let result = getRandomItem(cpuArray);

    setTimeout(function () {
        document.getElementById("main-window").innerHTML = "";
    }, 3000);

    //Comparison between rock vs all options
    if (picked === "rock" && result === "rock") {

        document.getElementById('main-window').innerHTML += "It's a tie" + `<i id="uno" class="fa-regular fa-hand-back-fist "></i>`;


    }



    else if (picked === "rock" && result === "scissors") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="tres" class="fa-regular fa-hand-scissors"></i>`;



        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }

    else if (picked === "rock" && result === "paper") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="dos" class="fa-regular fa-hand"></i>`;

    }

    else if (picked === "rock" && result === "lizard") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="cuatro" class="fa-regular fa-hand-lizard"></i>`;



        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }

    else if (picked === "rock" && result === "spock") {
        document.getElementById('main-window').innerHTML += "You Lose!" `<i id="cinco" class="fa-regular fa-hand-spock"></i>`;



    }

    //Comparison between paper vs all options
    else if (picked === "paper" && result === "paper") {
        document.getElementById('main-window').innerHTML += "It's a tie" + `<i id="dos" class="fa-regular fa-hand"></i>`;


    }

    else if (picked === "paper" && result === "rock") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="uno" class="fa-regular fa-hand-back-fist"></i>`;


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;



    }
    else if (picked === "paper" && result === "scissors") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="tres" class="fa-regular fa-hand-scissors"></i>`;


    }

    else if (picked === "paper" && result === "lizard") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="cuatro" class="fa-regular fa-hand-lizard"></i>`;

    }

    else if (picked === "paper" && result === "spock") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="cinco" class="fa-regular fa-hand-spock"></i>`;

        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }


    //Comparison between scissors vs all options
    else if (picked === "scissors" && result === "scissors") {
        document.getElementById('main-window').innerHTML += "It's a tie" + `<i id="tres" class="fa-regular fa-hand-scissors"></i>`;

    }

    else if (picked === "scissors" && result === "rock") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="uno" class="fa-regular fa-hand-back-fist"></i>`;




    }
    else if (picked === "scissors" && result === "paper") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="dos" class="fa-regular fa-hand"></i>`;



        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }

    else if (picked === "scissors" && result === "lizard") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="cuatro" class="fa-regular fa-hand-lizard"></i>`;


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }

    else if (picked === "scissors" && result === "spock") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="cinco" class="fa-regular fa-hand-spock"></i>`;


    }


    //Comparison between lizard vs all options
    else if (picked === "lizard" && result === "lizard") {
        document.getElementById('main-window').innerHTML += "It's a tie" + `<i id="cuatro" class="fa-regular fa-hand-lizard"></i>`;


    }

    else if (picked === "lizard" && result === "rock") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="uno" class="fa-regular fa-hand-back-fist"></i>`;



    }
    else if (picked === "lizard" && result === "paper") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="dos" class="fa-regular fa-hand"></i>`;


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }

    else if (picked === "lizard" && result === "scissor") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="tres" class="fa-regular fa-hand-scissors"></i>`;

    }

    else if (picked === "lizard" && result === "spock") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="cinco" class="fa-regular fa-hand-spock"></i>`;

        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }



    //Comparison between lizard vs all options
    else if (picked === "spock" && result === "spock") {
        document.getElementById('main-window').innerHTML += "It's a tie" + `<i id="cinco" class="fa-regular fa-hand-spock"></i>`;

    }

    else if (picked === "spock" && result === "rock") {
        document.getElementById('main-window').innerHTML += "You Win!" + `<i id="uno" class="fa-regular fa-hand-back-fist"></i>`;



        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }
    else if (picked === "spock" && result === "paper") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="dos" class="fa-regular fa-hand"></i>`;


    }

    else if (picked === "spock" && result === "scissor") {
        document.getElementById('main-window').innerHTML += "You Win!" `<i id="tres" class="fa-regular fa-hand-scissors"></i>`;


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }

    else if (picked === "spock" && result === "lizard") {
        document.getElementById('main-window').innerHTML += "You Lose!" + `<i id="cuatro" class="fa-regular fa-hand-lizard"></i>`;


    }


}


