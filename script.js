const newGameBtn = document.querySelector(".new-game-btn");
// const playArea = document.querySelector(".play-area");
const cardContainer = document.querySelector(".card-container")
const showCard = true

// Card Number Array
const cardNumbers = [1,2,3,4,5]


// ---------VARIABLES---------
let firstGuess = 0
let secondGuess = 0
let counter = 0

// ---------FUNCTIONS---------

// Randomise Array
const randomCardGenerator = (cardNumbers => {
    let randomCards = []
    for (let i = 0; i < 2; i++){
        let numberOfCardsToReturn = cardNumbers.length;
        for (let i = 0; i < numberOfCardsToReturn; i++){
            let newCard = cardNumbers[Math.floor(Math.random()*cardNumbers.length)]
            randomCards.push(newCard) 
        }
    
    }console.log(randomCards)  
    return randomCards;
    
})
// Function to start new game and layout cards



// newGameBtn.addEventListener("click", (event) => {
        randomCardGenerator(cardNumbers).map((number,i) => {
        const cardNumberId = i+1
        // console.log(i)
        const playCard = document.createElement("p");        
        playCard.innerText = number;
        playCard.setAttribute("class", "card")
        // playCard.setAttribute("id", `${cardNumberId}`);
        cardContainer.appendChild(playCard);  

    })
// })

// Find the cards in the DOM - declare here or after they're called?
const cards = document.querySelectorAll("p")

// CHECKS "NEW GAME" BUTTON WORKS
// newGameBtn.addEventListener("click", (event) => {
//    console.log("New Game Button Clicked")
// })

// function to check if pair value matches when called

// const checkIfMatchFound = ((firstGuess),(secondGuess) => {
//     if (firstGuess === secondGuess){
//         console.log("They match!")
//         firstGuess = 0
//         secondGuess = 0
//     } else if (firstGuess != secondGuess){
//         console.log("They don't match! Try again!")
//         firstGuess = 0
//         secondGuess = 0
//     }
// })

// Function to get value of matching pairs
cards.forEach(card => {
    card.addEventListener("click", (event) =>{
        // console.log(`Card value is ${card.innerHTML}`)
        if (firstGuess === 0 && secondGuess === 0){
            firstGuess = event.target.innerHTML
        } else if (firstGuess > 0 && secondGuess === 0){
            secondGuess = event.target.innerHTML
            // checkIfMatchFound(firstGuess,secondGuess)
            if (firstGuess === secondGuess){ 
                // console.log(`First Guess:${firstGuess}`)
                // console.log(`Second Guess:${secondGuess}`)
                console.log(`The First Guest was ${firstGuess} and your Second Guess was ${secondGuess} `)
                console.log("They match!")
                firstGuess = 0
                secondGuess = 0
              } else if(firstGuess != secondGuess){
                // console.log(`First Guess:${firstGuess}`)
                // console.log(`Second Guess:${secondGuess}`)
                console.log(`The First Guest was ${firstGuess} and your Second Guess was ${secondGuess} `)
                console.log("They dont match! Try Again!")
                firstGuess = 0
                secondGuess = 0
                }   
            }
        console.log(`First Guess:${firstGuess}`)
        console.log(`Second Guess:${secondGuess}`)
    })
})




