// Importing functions
import getUsersData from "./functions/getUsersData.js"
import renderUserCards from "./functions/renderUserCards.js"
import initPage from "./functions/initPage.js"

// Initializing the page layout
initPage()

// Getting data from the API
const usersData = await getUsersData()

// Initial rendering of user cards
renderUserCards(usersData)

// Adding input event handler for the search field, which re-renders user cards on input
const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("input", (event) => {
    const filteredData = usersData.filter((user) => user.login.toLowerCase().startsWith(event.target.value))
    renderUserCards(filteredData)
})