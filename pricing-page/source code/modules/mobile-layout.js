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
    displayForm();
    toggleTable();
}

window.addEventListener('load', () => {
    applyResponsiveLayout();
    displayAddOns();
    logo();
    displayFaq();
    setupOverlay();
    toggleFaq();
    toggleMobileNav();
});
window.addEventListener('resize', applyResponsiveLayout);