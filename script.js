const newGameBtn = document.querySelector(".new-game-btn");
const cardContainer = document.querySelector(".card-container")

// Card Number Array
let cardNumbers = [1,2,3,4,5,1,2,3,4,5]



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
    shuffledCardsArr.sort(() => Math.random() -0.5)
    // console.log(cards)
    return shuffledCardsArr
}

const generateCards = () =>{
    const cardItem = shuffleCards(cardNumbers);
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
            setTimeout(() => card.classList.remove("toggle-card"),1000)
            // card.classList.remove("toggle-card")
         })    
        } 
    }

}
// Run generate cards when page loads
generateCards()

const win = () => {
    alert("YOU WON!")
    resetGame()
}

const resetGame = () =>{
    matchedCards = 0
    cardNumbers = [1,2,3,4,5,1,2,3,4,5];
    const cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        setTimeout(() => card.classList.remove("toggle-card"),1000)
        setTimeout(() => card.remove(),3000)
    })

    setTimeout(() => generateCards(),3000)
}

