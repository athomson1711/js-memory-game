const newGameBtn = document.querySelector(".new-game-btn");
// const playArea = document.querySelector(".play-area");
const cardContainer = document.querySelector(".card-container")

const cardNumbers = [1,1,2,2,3,3,4,4,5,5]

// Function to start new game and layout cards
// NEED TO add a way to randomly generate cards

// newGameBtn.addEventListener("click", (event) => {
        const dealCards = cardNumbers.map(number => {
        const playCard = document.createElement("p");
        playCard.innerHTML = number;
        playCard.setAttribute("class", "card");
        cardContainer.appendChild(playCard);  
    })
// })

// CHECKS "NEW GAME" BUTTON WORKS
newGameBtn.addEventListener("click", (event) => {
   console.log("New Game Button Clicked")
})


const cards = document.querySelectorAll("p")

cards.forEach(card => {
    card.addEventListener("click", (event) =>{
        console.log(`Card value is ${card.innerHTML}`)
    })
})



