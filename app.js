// Initial setup

const root = document.getElementById("root")

const userCardsContainer = document.createElement("div")
userCardsContainer.classList = "userCardsContainer"

const searchBar = document.createElement("input")
searchBar.classList = "searchBar"
searchBar.id = "searchInput"
searchBar.setAttribute("type", "text")
searchBar.setAttribute("placeholder", "Search")

let data = [];

root.appendChild(searchBar)


// Declaring functions

const getUsersData = async () => {
    const response = await fetch(`https://api.github.com/users`, {
        headers: {
            authorization: "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"
        }
    })
    const usersData = await response.json()
    data = usersData;


    return usersData
}

const renderUserCards = (usersData, filteredUsers) => {

    userCardsContainer.innerHTML = filteredUsers.map((user) => {
        return `
        <div class="userCard">
            <img src=${user.avatar_url}>
            <p>${user.login}</p>
            <button>Show more</button>
            <div class="hiddenInfo">
                <p>Rank: ${user.type}</p>
                <p>Admin: ${user.site_admin}</p>
            </div>
        </div>`
    }).join("")

    root.appendChild(userCardsContainer)
}

const setDisplay = (event) => {

    if (event.target.nextElementSibling.style.display === "block") {
        event.target.nextElementSibling.style.display = "none"
        event.target.textContent = "Show more"
    } else {
        event.target.nextElementSibling.style.display = "block"
        event.target.textContent = "Show less"
    }
}

const init = async () => {

    userCardsContainer.innerHTML = "<p>Loading...</p>"
    root.appendChild(userCardsContainer)

    const usersData = await getUsersData()

    renderUserCards(usersData, usersData)

    searchBar.addEventListener("input", (event) => {
        const filteredUsers = data.filter((user) => user.login.toLowerCase().startsWith(event.target.value))
        renderUserCards(data, filteredUsers)
    })

    const btns = document.getElementsByTagName("button")
    for (const btn of btns) {
        btn.addEventListener("click", setDisplay)
    }
}

// Invoking init function

init()

