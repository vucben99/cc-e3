export default function initPage() {
    
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
}