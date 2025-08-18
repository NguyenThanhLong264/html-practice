let lastWidth = window.innerWidth;

function applyResponsiveLayout() {
    const width = window.innerWidth;
    if (width < 768) {
        renderMobileLayout();
        mobileTable();
    } else {
        renderLaptopLayout();
        laptopTable();
        replaceIcon();
        highlightMainHeader(1);
        highlightPopularColumn(2);
    }
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
    displayForm();
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width !== lastWidth) {
        lastWidth = width;
        applyResponsiveLayout();
    }
});
