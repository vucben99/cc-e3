// Setting display of hidden infos depending on current state
export default function setDisplay(event) {

    if (event.target.nextElementSibling.style.display === "block") {
        event.target.nextElementSibling.style.display = "none"
        event.target.textContent = "Show more"
    } else {
        event.target.nextElementSibling.style.display = "block"
        event.target.textContent = "Show less"
    }
}