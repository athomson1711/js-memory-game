const newGameBtn = document.querySelector(".new-game-btn");
const cardContainer = document.querySelector(".card-container")

// Card Number Array
const cardNumbers = [1,2,3,4,5,1,2,3,4,5]
// console.log(cardNumbers)


// ---------VARIABLES---------
// let firstGuess = 0
// let secondGuess = 0
// let counter = 0
// const showCard = true
let matchedCards  = 0
// ---------FUNCTIONS---------

// Randomise cardNumber Array elements
const shuffleCards = () => {
    // how to "duplicate" array?
    // .conact?
    const shuffledCardsArr = cardNumbers;
    // HOW DOES THIS WORK?!?!?!?!
    shuffledCardsArr.sort(() => Math.random() -0.5)
    // console.log(cards)
    return shuffledCardsArr
}

const generateCards = () =>{
    const cardItem = shuffleCards();
    // console.log(cardItem)
    // Creates HTML elements for each Card in the array
    cardItem.forEach(value => {
        // create a div for the card, it's front face and it's back face
        const card = document.createElement("div")
        const cardFront = document.createElement("div")
        const cardBack = document.createElement("div")

        // assign the classes to the card, it's front face and it's back face
        card.classList = "card"
        cardFront.classList = "card-front"
        cardBack.classList = "card-back"

        // Assign the value of the array element to the innter HTML of the card front div
        // HOW WOULD IT ADD IMG OR value from object key?
        cardFront.innerHTML = value;

        // add the card to the cardContainer div in the HTML
        cardContainer.appendChild(card)

        // add the card front and back to the card div in the HTML
        card.appendChild(cardFront)
        card.appendChild(cardBack) 

        // add an event listener to the card which when clicked: 
        card.addEventListener("click", (event) =>{

            // add class of toggle-card to rotate the card using css class
            card.classList.toggle("toggle-card")

            // runs the checkMatch Function
            checkIfMatchFound(event);
        })
    })
}

// Check if the cards match
const checkIfMatchFound = (event) => {

    // assign the card that was clicked on to the variable flippedCard
    const flippedCard = event.target;
    // add a class of "flipped" to the flipped card
    flippedCard.classList.add("flipped")
    // update the DOM to find the cards with a class of flipped
    const flippedCards = document.querySelectorAll(".flipped");

    // console.log(flippedCard)
    // console.log(flippedCards)

    // If two cards have been flipped:
    if (flippedCards.length === 2){
        // NEED TO DEACTIVATE POINTER EVENTS SO CAN"T CLICK ON OTHER CARDS UNTIL NON-MATCHED PAIR RESET
        // CHeck to see if either of the two flipped cards values match
         
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) { 
            // console.log("correct!")
            // If they match update the number of matched cards,
            matchedCards++
            // remove the .flipped class and prevent the cards from being clicked on
            flippedCards.forEach(card =>{
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
             }) 
            //  Check to see if the number of matched cards is the number of possible pairs in the deck.
             if (matchedCards === cardNumbers.length/2){
                // delay running function?
                // If yes then run the win function to end the game
                setTimeout(() => win(), 1000)
            } 
        } else{
            // If the flipped card values donn't match then:
        // console.log("nope...");
        flippedCards.forEach(card =>{
            // remove the class flipped
            card.classList.remove("flipped");
            // delay the toggle class being removed so 2nd card clicked gets a chance to be seen by the user
            setTimeout(() => card.classList.remove("toggle-card"),800)
         })    
        } 
    }

}
// Run generate cards when page loads
generateCards()

const win = () => {
    alert("YOU WON!")
}

const resetGame = () =>{
    // WHAT NEEDS TO BE RESET??
    // Target the cards then delete them by class name?
    // reset the array?? ie  [1,2,3,4,5,1,2,3,4,5]
    matchedCards = 0
    generateCards()
}
// console.log(cardNumbers)

// -------------ARCHIVE----------
// // function to check if pair value matches when called

// const checkIfMatchFound = (guess1,guess2) => {
//     if (guess1 === guess2){
//         console.log("They match!")
//         firstGuess = 0
//         secondGuess = 0
//     } else if (guess1 != guess2){
//         console.log("They don't match! Try again!")
//         firstGuess = 0
//         secondGuess = 0
//     }
// }

// Function to get value of matching pairs
// cards.forEach(card => {
//     card.addEventListener("click", (event) =>{
//         // console.log(`Card value is ${card.innerHTML}`)
//         if (firstGuess === 0 && secondGuess === 0){
//             firstGuess = event.target.innerHTML
//         } else if (firstGuess > 0 && secondGuess === 0){
//             secondGuess = event.target.innerHTML
//             checkIfMatchFound(firstGuess,secondGuess)
//             if (firstGuess === secondGuess){ 
//                 // console.log(`First Guess:${firstGuess}`)
//                 // console.log(`Second Guess:${secondGuess}`)
//                 console.log(`The First Guest was ${firstGuess} and your Second Guess was ${secondGuess} `)
//                 console.log("They match!")
//                 firstGuess = 0
//                 secondGuess = 0
//               } else if(firstGuess != secondGuess){
//                 // console.log(`First Guess:${firstGuess}`)
//                 // console.log(`Second Guess:${secondGuess}`)
//                 console.log(`The First Guest was ${firstGuess} and your Second Guess was ${secondGuess} `)
//                 console.log("They dont match! Try Again!")
//                 firstGuess = 0
//                 secondGuess = 0
//                 }   
//             }
//         console.log(`First Guess:${firstGuess}`)
//         console.log(`Second Guess:${secondGuess}`)
//     })
// })




// Randomise Card Array
// const randomCardGenerator = (cardNumbers => {
//     let randomCards = []
//     for (let i = 0; i < 2; i++){
//         let numberOfCardsToReturn = cardNumbers.length;
//         for (let i = 0; i < numberOfCardsToReturn; i++){
//             let newCard = cardNumbers[Math.floor(Math.random()*cardNumbers.length)]
//             randomCards.push(newCard) 
//         }
    
//     }console.log(randomCards)  
//     return randomCards;
    
// })
// // Function to start new game and layout cards


   
// // newGameBtn.addEventListener("click", (event) => {
//         randomCardGenerator(cardNumbers).map((number,i) => {
//         const cardNumberId = i+1
//         // console.log(i)
//         const playCard = document.createElement("p");        
//         playCard.innerText = number;
//         playCard.setAttribute("class", "card")
//         // playCard.setAttribute("id", `${cardNumberId}`);
//         cardContainer.appendChild(playCard);  

//     })
// // })






