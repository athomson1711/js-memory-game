const newGameBtn = document.querySelector(".new-game-button");
// const playArea = document.querySelector(".play-area");
const cardContainer = document.querySelector(".card-container")

const cardNumbers = [1,2,3,4,5,6,7,8,9,10]

cardNumbers.map(number => {
    const card = document.createElement("p");
    card.innerHTML = number;
    card.setAttribute("class", "card");
    cardContainer.appendChild(card);  
})

