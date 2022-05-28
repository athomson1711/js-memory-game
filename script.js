const newGameBtn = document.querySelector(".new-game-btn");
// const playArea = document.querySelector(".play-area");
const cardContainer = document.querySelector(".card-container")
const showCard = true
// Card Number Array
const cardNumbers = [1,1,2,2,3,3,4,4,5,5]

// Variables
let firstGuess = 0
let secondGuess = 0

// Function to start new game and layout cards

// newGameBtn.addEventListener("click", (event) => {
        const dealCards = cardNumbers.map((number,i) => {
        const cardNumberId = i+1
        // console.log(i)
        const playCard = document.createElement("p");        
        playCard.innerText = number;
        playCard.setAttribute("class", "card")
        playCard.setAttribute("id", `${cardNumberId}`);
        cardContainer.appendChild(playCard);  
    })
// })

// CHECKS "NEW GAME" BUTTON WORKS
newGameBtn.addEventListener("click", (event) => {
   console.log("New Game Button Clicked")
})

// Find the cards in the DOM - declare here or before they're called?
const cards = document.querySelectorAll("p")

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




