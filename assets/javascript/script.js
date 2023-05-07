let body = document.body;

const cpuArray = ["rock", "paper", "scissors", "lizard", "spock"];



//listener for start menu button
let myClick = document.getElementById('startbtn');
myClick.addEventListener('click', gameChoices);


/**
 * This function will remove the Start menu
*/
function gameChoices() {
    let start = document.getElementById('start');
    start.remove();

    if (myClick) {

        let createMenu = document.createElement("section");
        createMenu.classList.add("scoreboard");
        createMenu.innerHTML = `<section id="scoreboard">
        <div id="numofwins">Wins <span id="score">0</span></div>
        <div id="numofrounds"></div>

    </section>
    <div id="main-window"></div>
    <div id="choice-panel">
    <button type="submit" class="choices" id="rock"><i class="fa-regular fa-hand-back-fist"></i></button>
    <button type="submit" class="choices" id="paper"><i class="fa-regular fa-hand"></i></button>
    <button type="submit" class="choices" id="scissors"><i class="fa-regular fa-hand-scissors"></i></button>
    <button type="submit" class="choices" id="lizard"><i class="fa-regular fa-hand-lizard"></i></button>
    <button type="submit" class="choices" id="spock"><i class="fa-regular fa-hand-spock"></i></button>
    <button type="submit" onclick="playGame().document.getElementById('main-window').innerHTML.remove();" id="playbtn">Play</button>
    </div>`;

        body.appendChild(createMenu);
    }
    let cClick = document.getElementsByClassName('choices');
    for (let i = 0; i < cClick.length; i++) {
        cClick[i].addEventListener('click', pickChoice);
    }

    document.getElementById("numofwins").appendChild(wins);

}




function pickChoice() {
    let = picked = "";
    let img = src = 'assets / images / stone.png';

    if (this.getAttribute('id') === "rock") {
        document.getElementById('main-window').innerHTML = '<img id="img" width="100" height="100" src="../assets/images/stone.png">';

        picked += "rock";
        alert('rock');
    } else if (this.getAttribute('id') === "paper") {
        document.getElementById('main-window').innerHTML = '<img id="img" width="100" height="100" src="../assets/images/paper-folding.gif">';
        picked += "paper";
        alert('paper');

    } else if (this.getAttribute('id') === "scissors") {
        document.getElementById('main-window').innerHTML = '<img id="img" width="100" height="100" src="../assets/images/scissors.png">';

        picked += "scissors";
        alert('scissors');
    } else if (this.getAttribute('id') === "lizard") {
        document.getElementById('main-window').innerHTML = '<img id="img" width="100" height="100" src="../assets/images/reptile.png">';

        picked += "lizard";
        alert('lizard');
    } else if (this.getAttribute('id') === "spock") {
        document.getElementById('main-window').innerHTML = '<img id="img" width="100" height="100" src="../assets/images/ ">';

        picked += "spock";
        alert('spock');
    }

}


function showItem(picked) {
    let item = this.picked.innerText;
    return item;
    document.getElementById("main-window").appendChild(item);
}





function playGame() {

    compareChoices();
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
 * This Function will take the value from the user's choice and comparet it to the random value and ouput the icon.
 */

function compareChoices() {
    //calls random number funciton
    let result = getRandomItem(cpuArray);


    //Comparison between rock vs all options
    if (picked === "rock" && result === "rock") {
        document.getElementById('main-window').innerHTML += '<img  id="scissors" width="100" height="100" src="../assets/images/scissors.png">';
        alert(`CPU picked ${result}"It's a tie"`);

    }


    else if (picked === "rock" && result === "scissors") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuscissors" width="100" height="100" src="../assets/images/scissors.png">';
        alert(`CPU picked ${result} You Win!`);



        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;



    }

    else if (picked === "rock" && result === "paper") {
        document.getElementById('main-window').innerHTML += '<img  id="cpupaper" width="100" height="100" src="../assets/images/paper-folding.gif">';
        alert(`CPU picked ${result} You Lose!`);


    }

    else if (picked === "rock" && result === "lizard") {
        document.getElementById('main-window').innerHTML += '<img  id="cpureptile" width="100" height="100" src="../assets/images/reptile.png">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;
    }

    else if (picked === "rock" && result === "spock") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuspock" width="100" height="100" src="../assets/images/p ">';
        alert(`CPU picked ${result} You Lose!`);



    }

    //Comparison between paper vs all options
    else if (picked === "paper" && result === "paper") {
        document.getElementById('main-window').innerHTML += '<img  id="cpupaper" width="100" height="100" src="../assets/images/paper-folding.gif">';
        alert(`CPU picked ${result}"It's a tie"`);

    }

    else if (picked === "paper" && result === "rock") {
        document.getElementById('main-window').innerHTML += '<img  id="stone" width="100" height="100" src="../assets/images/stone.png">';
        alert(`CPU picked ${result} You Win!`);

        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;



    }
    else if (picked === "paper" && result === "scissors") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuscissors" width="100" height="100" src="../assets/images/scissors.png">';
        alert(`CPU picked ${result} You Lose!`);

    }

    else if (picked === "paper" && result === "lizard") {
        document.getElementById('main-window').innerHTML += '<img  id="cpureptile" width="100" height="100" src="../assets/images/reptile.png">';
        alert(`CPU picked ${result} You Lose!`);

    }

    else if (picked === "paper" && result === "spock") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuspock" width="100" height="100" src="../assets/images/p ">';
        alert(`CPU picked ${result} You Win!`);

        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }


    //Comparison between scissors vs all options
    else if (picked === "scissors" && result === "scissors") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuscissors" width="100" height="100" src="../assets/images/paper-scissors.png">';
        alert(`CPU picked ${result}"It's a tie"`);

    }

    else if (picked === "scissors" && result === "rock") {
        document.getElementById('main-window').innerHTML += '<img  id="stone" width="100" height="100" src="../assets/images/stone.png">';
        alert(`CPU picked ${result} You Lose!`);



    }
    else if (picked === "scissors" && result === "paper") {
        document.getElementById('main-window').innerHTML += '<img  id="cpupaper" width="100" height="100" src="../assets/images/paper-folding.gif">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }

    else if (picked === "scissors" && result === "lizard") {
        document.getElementById('main-window').innerHTML += '<img  id="cpureptile" width="100" height="100" src="../assets/images/reptile.png">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }

    else if (picked === "scissors" && result === "spock") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuspock" width="100" height="100" src="../assets/images/p ">';
        alert(`CPU picked ${result} You Lose!`);



    }


    //Comparison between lizard vs all options
    else if (picked === "lizard" && result === "lizard") {
        document.getElementById('main-window').innerHTML += '<img  id="cpureptile" width="100" height="100" src="../assets/images/reptile.png">';
        alert(`CPU picked ${result}"It's a tie"`);

    }

    else if (picked === "lizard" && result === "rock") {
        document.getElementById('main-window').innerHTML += '<img  id="stone" width="100" height="100" src="../assets/images/stone.png">';
        alert(`CPU picked ${result} You Lose!`);



    }
    else if (picked === "lizard" && result === "paper") {
        document.getElementById('main-window').innerHTML += '<img  id="cpupaper" width="100" height="100" src="../assets/images/paper-folding.gif">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;

    }

    else if (picked === "lizard" && result === "scissor") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuscissors" width="100" height="100" src="../assets/images/reptile.png">';
        alert(`CPU picked ${result} You Lose!`);



    }

    else if (picked === "lizard" && result === "spock") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuspock" width="100" height="100" src="../assets/images/p ">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }



    //Comparison between lizard vs all options
    else if (picked === "spock" && result === "spock") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuspock" width="100" height="100" src="../assets/images/  ">';
        alert(`CPU picked ${result}"It's a tie"`);

    }

    else if (picked === "spock" && result === "rock") {
        document.getElementById('main-window').innerHTML += '<img  id="stone" width="100" height="100" src="../assets/images/stone.png">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }
    else if (picked === "spock" && result === "paper") {
        document.getElementById('main-window').innerHTML += '<img  id="cpupaper" width="100" height="100" src="../assets/images/paper-folding.gif">';
        alert(`CPU picked ${result} You Lose!`);



    }

    else if (picked === "spock" && result === "scissor") {
        document.getElementById('main-window').innerHTML += '<img  id="cpuscissors" width="100" height="100" src="../assets/images/scissors.png">';
        alert(`CPU picked ${result} You Win!`);


        wins = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++wins;
        document.getElementById("wins").innerText = ++wins;


    }

    else if (picked === "spock" && result === "lizard") {
        document.getElementById('main-window').innerHTML += '<img  id="cpureptile" width="100" height="100" src="../assets/images/reptile.png ">';
        alert(`CPU picked ${result} You Lose!`);



    }



}