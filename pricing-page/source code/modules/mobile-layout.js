function applyResponsiveLayout() {
    const width = window.innerWidth;
    console.log(width);

    if (width < 768) {
        renderMobileLayout();
        mobileTable();
    } else {
        renderLaptopLayout()
        laptopTable()
        highlightMainHeader(1)
        highlightPopularColumn(2)
    }
    replaceIcon();
}

window.addEventListener('load', () => {
    applyResponsiveLayout();
    displayAddOns();
    displayFaq();
    toggleOpen();
});
window.addEventListener('resize', applyResponsiveLayout);