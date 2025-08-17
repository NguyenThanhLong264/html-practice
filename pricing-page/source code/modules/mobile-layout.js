function applyResponsiveLayout() {
    const width = window.innerWidth;

    if (width < 768) {
        renderMobileLayout();
        mobileTable();
    } else {
        renderLaptopLayout()
        laptopTable()
        replaceIcon();
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