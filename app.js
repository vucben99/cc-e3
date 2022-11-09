const root = document.getElementById("root")
const userCardsContainer = document.createElement("div")

const searchBar = document.createElement("input")
searchBar.classList = "searchBar"
searchBar.setAttribute("type", "text")
searchBar.setAttribute("placeholder", "Search")
searchBar.addEventListener("input", (event) => {
    console.log(event.target.value)
})
root.appendChild(searchBar)


const setDisplay = (event) => {

    if (event.target.nextElementSibling.style.display === "block") {
        event.target.nextElementSibling.style.display = "none"
        event.target.textContent = "Show more"
    } else {
        event.target.nextElementSibling.style.display = "block"
        event.target.textContent = "Show less"
    }
}

const init = async (user) => {

    const response = await fetch(`https://api.github.com/users`, {
        headers: {
            authorization: "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"
        }
    })
    const usersData = await response.json()

    userCardsContainer.classList = "userCardsContainer"

    userCardsContainer.innerHTML = usersData.map((user) => {
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

    const btns = document.getElementsByTagName("button")
    for (const btn of btns) {
        btn.addEventListener("click", setDisplay)
    }
}

init()

