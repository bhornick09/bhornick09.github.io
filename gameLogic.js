var count = 0;
var theme = 0;
var themeColor = "gold"
var dealerTotal = 0;
var userOneValue = 0;
var userTwoValue = 0;
var dealerCard = document.getElementById("dealerCard");
var userCard = document.getElementById("userCard");
var userCard2 = document.getElementById("userCard2");
var hit = document.getElementById("hit");
var stand = document.getElementById("stand");
var userSection = document.getElementById("userSection");
var dealerSection = document.getElementById("dealerSection");
var revealCard = document.getElementById("revealCard");
var total = document.getElementById("total");
var dealerTotalText = document.getElementById("dealerTotal");
var playAgainText = document.getElementById("playAgain");
var gameResult = document.getElementById("result");
var gameResult2 = document.getElementById("result2");

function changeTheme(){
    switch(theme){
        case 0:
            themeColor = "gold"
            theme++;
            break;
        case 1:
            themeColor = "greenyellow"
            theme++;
            break;
        case 2:
            themeColor = "red"
            theme++;
            break;
        case 3:
            themeColor = "orange"
            theme++;
            break;
        case 4:
            themeColor = "aqua"
            theme = 0;
            break;
    }
    document.documentElement.style.setProperty('--main-color', themeColor);
}

function randomCard(){
    draw.innerHTML = "";
    var givenCard;

    for(let i = 0; i <= 3; i++){
        var cardNumber = Math.floor(Math.random() * (14 - 1) + 1);
        switch (cardNumber){
            case 1:
                givenCard = "A"
                break;
            case 2:
                givenCard = 2
                break;
            case 3:
                givenCard = 3
                break;
            case 4:
                givenCard = 4
                break;
            case 5:
                givenCard = 5
                break;
            case 6:
                givenCard = 6
                break;
            case 7:
                givenCard = 7
                break;
            case 8:
                givenCard = 8
                break;
            case 9:
                givenCard = 9
                break;
            case 10:
                givenCard = 10
                break;
            case 11:
                givenCard = "J"
                break;
            case 12:
                givenCard = "Q"
                break;
            case 13:
                givenCard = "K"
                break;
    }
        if(i == 1){
            dealerCard.innerHTML = givenCard;
            dealerTotal = cardNumber;
            if (cardNumber >= 10){
                dealerTotal = 10;
            }
            if (cardNumber == 1){
                dealerTotal = 11;
            }
        }
        else if( i == 2){
            userCard.innerHTML = givenCard;
            userOneValue = cardNumber;
            if (cardNumber >= 10){
                userOneValue = 10;
            }
            if (cardNumber == 1){
                userTwoValue = 11;
            }
        }
        else{
            userCard2.innerHTML = givenCard;
            userTwoValue = cardNumber;
            if (cardNumber >= 10){
                userTwoValue = 10;
            }
            if (cardNumber == 1){
                userTwoValue = 11;
            }
        }
    }
        if (count < 10){
            setTimeout(randomCard, 300)
            count++
        }
        else{
            count = 0;
            hit.innerHTML = "Hit";
            stand.innerHTML = "Stand";
            userTotal = userOneValue + userTwoValue;
            total.innerHTML = "Total: " + userTotal;
            dealerTotalText.innerHTML = "Total: " + dealerTotal;
        }
    }


function random(){
    var randomNumber = Math.floor(Math.random() * (14 - 2) + 2);
    return randomNumber;
}

function hitCard(){
    var newCard = document.createElement("card");
    var randomNumber = random(); // Number for math
    var cardStyle; // Card image

    // Check for face Cards 
    if (randomNumber > 10 || randomNumber == 1){
        if (randomNumber == 11){
            cardStyle = "J"
            randomNumber = 10;
        }
        else if (randomNumber == 12){
            cardStyle = "Q"
            randomNumber = 10;
        }
        else if (randomNumber == 13){
            cardStyle = "K"
            randomNumber = 10;
        }
        else if (randomNumber == 1 ){
            cardStyle = "A"
            randomNumber = 11;
        }
    }
    else {
        cardStyle = randomNumber;
    }

    newCard.textContent = cardStyle;
    userSection.appendChild(newCard);
    userTotal += randomNumber;
    total.innerHTML = "Total: " + userTotal;

    if (userTotal > 21){
        stand.innerHTML = "";
        hit.innerHTML = "";
        gameResult.innerHTML = "You busted,";
        gameResult2.innerHTML = "You Lose!";
    }
}

function dealerHitCard(){
    var newCard = document.createElement("card");
    var randomNumber = random(); // Number for math
    var cardStyle; // Card image

    // Check for face Cards 
    if (randomNumber > 10 || randomNumber == 1){
        if (randomNumber == 11){
            cardStyle = "J"
            randomNumber = 10;
        }
        else if (randomNumber == 12){
            cardStyle = "Q"
            randomNumber = 10;
        }
        else if (randomNumber == 13){
            cardStyle = "K"
            randomNumber = 10;
        }
        else if (randomNumber == 1 ){
            cardStyle = "A"
            randomNumber = 11;
        }
    }
    else {
        cardStyle = randomNumber;
    }

    // Place new card
    dealerSection.appendChild(newCard);

    // Set timeout after card is placed
    setTimeout(() => {
        // Set the text content of the new card
        newCard.textContent = cardStyle;
        // Update dealerTotal and dealerTotalText
        dealerTotal += randomNumber;
        dealerTotalText.innerHTML = "Total: " + dealerTotal;

        if (userTotal > 21){
            hit.innerHTML = "You busted,";
            stand.innerHTML = "You Lose!";
        }
        setTimeout(gameOver(), 500);
    }, 1000); // Delay in milliseconds, adjust as needed

}

function standCard(){
    var randomNumber = random();
    var cardStyle;

    // Check for face Cards 
    if (randomNumber > 10 || randomNumber == 1){
        if (randomNumber == 11){
            cardStyle = "J"
            randomNumber = 10;
        }
        else if (randomNumber == 12){
            cardStyle = "Q"
            randomNumber = 10;
        }
        else if (randomNumber == 13){
            cardStyle = "K"
            randomNumber = 10;
        }
        else if (randomNumber == 1 ){
            cardStyle = "A"
            randomNumber = 11;
        }
    }
    else {
        cardStyle = randomNumber;
    }

    revealCard.innerHTML = cardStyle;

    dealerTotal += randomNumber
    dealerTotalText.innerHTML = "Total: " + dealerTotal;
    setTimeout(gameOver, 1000);
}

function gameOver(){
    // Dealer hit if not winning
    if (dealerTotal < 21 && userTotal > dealerTotal){
        dealerHitCard();
    }
    else{
        // User Lose
        if (dealerTotal < userTotal || dealerTotal > 21){
            gameResult.innerHTML = "You Win!";
            gameResult.style.fontSize = "50px";
            stand.innerHTML = "";
            hit.innerHTML = "";
            gameResult2.innerHTML = "The Dealer busted! The Dealer had " + dealerTotal + " and You had " + userTotal + ".";
        }
        // Draw
        else if (dealerTotal == userTotal){
            gameResult.innerHTML = "Draw!";
            gameResult.style.fontSize = "50px";
            stand.innerHTML = "";
            hit.innerHTML = "";
            gameResult2.innerHTML = "The Dealer had " + dealerTotal + " and You had " + userTotal + ".";
        }
        // User Win
        else if (dealerTotal > userTotal && dealerTotal <= 21){
            gameResult.innerHTML = "You Lose!";
            gameResult.style.fontSize = "50px";
            stand.innerHTML = "";
            hit.innerHTML = "";
            gameResult2.innerHTML = "The Dealer had " + dealerTotal + " and You had " + userTotal + ".";
        }

    }

}
