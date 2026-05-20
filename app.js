function qidiruv() {
    let input = document.querySelector('input').value.toLowerCase()
    let carts = document.querySelectorAll('.cart')

    for (let cart of carts) {
        let h1 = cart.querySelector('h1').innerText.toLowerCase()

        if (h1.includes(input)) {
            cart.style.display = 'flex'
        } else {
            cart.style.display = ' none'
        }
    }
}
document.querySelector('input').addEventListener('input', qidiruv)


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});