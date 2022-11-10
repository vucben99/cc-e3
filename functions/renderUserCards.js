import setDisplay from "./setDisplay.js"

export default async function renderUserCards(usersData) {

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

    const btns = document.getElementsByTagName("button")
    for (const btn of btns) {
        btn.addEventListener("click", (event) => setDisplay(event))
    }
}