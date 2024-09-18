let cards = document.querySelectorAll('.card')
.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let cardwidth = card.clientWidth;
        let cardheight = card.clientHeight;
        let posX = (x - cardwidth / 2)
        let posY = (y - cardheight / 2)
        card.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    })
    card.addEventListener('mouseout', () => {
        card.style.transform = '';
    })
})