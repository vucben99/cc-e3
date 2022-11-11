import setDisplay from "./setDisplay.js"

// Rendering user cards
export default async function renderUserCards(usersData) {

    if (usersData.length) {
        userCardsContainer.innerHTML = await usersData.map((user) =>
            `
        <div class="userCard">
            <img src=${user.avatar_url}>
            <p>${user.login}</p>
            <button>Show more</button>
            <div class="hiddenInfo">
                <p>Rank: ${user.type}</p>
                <p>Admin: ${user.site_admin}</p>
            </div>
        </div>
        `
        ).join("")
    } else userCardsContainer.innerHTML = "<p>Nothing found</p>"

    // Adding click event handlers for the "Show more" buttons
    const btns = document.getElementsByTagName("button")
    for (const btn of btns) {
        btn.addEventListener("click", (event) => setDisplay(event))
    }
}