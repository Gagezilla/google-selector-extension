document.addEventListener("keyup", e => {
    if (isNaN(e.key)) return;
    let value = parseInt(e.key)
    if (value === 0) return;
    let searchBox = document.querySelector("input[name='q']")
    if (searchBox === document.activeElement) return;

    let results = Array.from(document.querySelectorAll("[data-header-feature] a"))
        .map(e => e.getAttribute("href"))

    window.open(results[value-1], "_self")
});