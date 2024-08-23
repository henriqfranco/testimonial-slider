const testimonials = [
    {
        name: "Cherise G",
        photoUrl:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        order: "1/3"
    },
    {
        name: "Rosetta Q",
        photoUrl:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
        order: "2/3"
    },
    {
        name: "Constantine V",
        photoUrl:
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
        order: "3/3"
    },
]

const cardImage = document.querySelector('.picture');
const cardText = document.querySelector('.main-text');
const cardName = document.querySelector('.user-name');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const cardOrder = document.querySelector('.amount')

let idx = 0;

rightArrow.addEventListener('click', function () {
    if (idx < 2) {
        idx++;
        const { name, photoUrl, text, order } = testimonials[idx];
        cardImage.src = photoUrl;
        cardText.textContent = text;
        cardName.textContent = name;
        cardOrder.textContent = order;
    }
    else {
        idx = 0;
        const { name, photoUrl, text, order } = testimonials[idx];
        cardImage.src = photoUrl;
        cardText.textContent = text;
        cardName.textContent = name;
        cardOrder.textContent = order;
    }
})

leftArrow.addEventListener('click', function () {
    if (idx > 0) {
        idx--;
        const { name, photoUrl, text, order } = testimonials[idx];
        cardImage.src = photoUrl;
        cardText.textContent = text;
        cardName.textContent = name;
        cardOrder.textContent = order;
    }
    else {
        idx = 2;
        const { name, photoUrl, text, order } = testimonials[idx];
        cardImage.src = photoUrl;
        cardText.textContent = text;
        cardName.textContent = name;
        cardOrder.textContent = order;
    }
})