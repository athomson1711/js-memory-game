const newGameBtn = document.querySelector(".new-game-btn");
// const playArea = document.querySelector(".play-area");
const cardContainer = document.querySelector(".card-container")
const showCard = true

// Card Number Array
const cardNumbers = [1,2,3,4,5,1,2,3,4,5]


// ---------VARIABLES---------
// let firstGuess = 0
// let secondGuess = 0
// let counter = 0
let matchedCards  = 0
// ---------FUNCTIONS---------


// FUNCTION TO DUPLICATE ARRAY ITEMS???

// Randomise Arry
const shuffleCards = () => {
    // how to "duplicate" array?
    const cards = cardNumbers;
    // HOW????
    cards.sort(() => Math.random() -0.5)
    return cards
}

const generateCards = () =>{
    const cardValue = shuffleCards();
    // Creates HTML elements for each Card
    cardValue.forEach(value => {
        const card = document.createElement("div")
        const cardFront = document.createElement("div")
        const cardBack = document.createElement("div")
        card.classList = "card"
        cardFront.classList = "card-front"
        cardBack.classList = "card-back"
        cardFront.innerHTML = value;
        cardContainer.appendChild(card)
        card.appendChild(cardFront)
        card.appendChild(cardBack) 

        card.addEventListener("click", (event) =>{
            card.classList.toggle("toggle-card")
            checkIfMatchFound(event);
        })
    })
}

// Check if the cards match
const checkIfMatchFound = (event) => {
    
    const flippedCard = event.target;
    flippedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped");
    // console.log(flippedCard)
    // console.log(flippedCards)
    if (flippedCards.length === 2){
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) { 
            console.log("correct!")
            matchedCards++
            flippedCards.forEach(card =>{
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
             }) 
             if (matchedCards === cardNumbers.length/2){
                // delay running function?
                setTimeout(() => win(), 1000)
            } 
        } else{
        console.log("nope...");
        flippedCards.forEach(card =>{
            card.classList.remove("flipped");
            // delay animation/trainsition??
            setTimeout(() => card.classList.remove("toggle-card"),800)
            
         })    
        } 
    }

}

generateCards()

const win = () => {
    alert("YOU WON!")
    // setTimeout(() => resetGame(), 1500)
}

const resetGame = () =>{
    // let cardValues = shuffleCards();
    // let cardFront = document.querySelectorAll(".face")
    // let card = document.querySelectorAll(".card")
    // cardValues.forEach((item, i) =>{
    //     card[i].classList.remove("toggle-cards");
    //     card[i].style.pointerEvents = "all";
    //     cardFront.innerHTML = item
    // })
    // document.querySelectorAll(".card")
    // cards.remove
    matchedCards = 0
    generateCards()
}

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




// Randomise Array
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






