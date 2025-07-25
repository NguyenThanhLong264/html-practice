const cardContainer = document.getElementById('feature-cards');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.chevron.prev');
const nextBtn = document.querySelector('.chevron.next');

const cardCount = dots.length;
let currentIndex = 0;

const scrollToIndex = (index) => {
    const cardWidth = cardContainer.offsetWidth;
    cardContainer.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
    });
    cardContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    updateDots(index);
    currentIndex = index;
};

const updateDots = (index) => {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => scrollToIndex(i));
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cardCount - 1) scrollToIndex(currentIndex + 1);
});

cardContainer.addEventListener('scroll', () => {
    const cardWidth = cardContainer.offsetWidth;
    const index = Math.round(cardContainer.scrollLeft / cardWidth);
    if (index !== currentIndex) {
        updateDots(index);
        currentIndex = index;
    }
});