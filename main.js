const main = document.querySelector("main")
const header = document.querySelector("header")
const searchResults = document.querySelector(".search-results")
const navDrawer = document.querySelector(".nav-drawer")

const toggleOpen = (tagName, el) => {
    if (tagName === "INPUT" || tagName === "IMG") {
        el.classList.remove("isHidden")
    } else {
        el.classList.add("isHidden")
    }
}

main.addEventListener("click", e => {
    toggleOpen(e.target.tagName, searchResults)
})

header.addEventListener("click", e => {
    toggleOpen(e.target.tagName, navDrawer)
})