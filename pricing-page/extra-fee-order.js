const items = document.querySelectorAll('.flex-wrapper .flex-item');
const total = items.length;

items.forEach((item, index) => {
    item.style.order = total - index;
});
