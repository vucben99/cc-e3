import getUsersData from "/functions/getUsersData.js"
import renderUserCards from "/functions/renderUserCards.js"
import setDisplay from "/functions/setDisplay.js"

// Getting data from the API
let usersData = await getUsersData()

// Getting root element
const root = document.getElementById("root")

// Making search bar
const searchBar = document.createElement("input")
searchBar.id = "searchInput"
searchBar.setAttribute("type", "text")
searchBar.setAttribute("placeholder", "Search")
root.appendChild(searchBar)

// Making container div for user cards
const userCardsContainer = document.createElement("div")
userCardsContainer.id = "userCardsContainer"
userCardsContainer.innerHTML = "<p class='loading'>Loading...</p>"
root.appendChild(userCardsContainer)

// Initial rendering of user cards
renderUserCards(usersData)

// Adding click event handlers for the "Show more" buttons


// Adding input event handler for the search field, which re-renders user cards on input
document.getElementById("searchInput").addEventListener("input", (event) => {
    const filteredData = usersData.filter((user) => user.login.toLowerCase().startsWith(event.target.value))
    renderUserCards(filteredData)
})