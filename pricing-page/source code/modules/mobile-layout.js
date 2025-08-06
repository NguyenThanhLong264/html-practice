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
    toggleTable();
}

window.addEventListener('load', () => {
    applyResponsiveLayout();
    displayAddOns();
    logo();
    displayFaq();
    displayForm();
    setupOverlay();
    toggleFaq();
});
window.addEventListener('resize', applyResponsiveLayout);