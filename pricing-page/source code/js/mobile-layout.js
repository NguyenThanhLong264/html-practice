let lastMode = window.innerWidth < 768 ? 'mobile' : 'desktop';

function applyResponsiveLayout(mode) {
    if (mode === 'mobile') {
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
    displayForm();
}

window.addEventListener('load', () => {
    displayAddOns();
    applyResponsiveLayout(lastMode);
    logo();
    displayFaq();
    toggleFaq();
    toggleMobileNav();
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const mode = width < 768 ? 'mobile' : 'desktop';

    if (mode !== lastMode) {
        lastMode = mode;
        applyResponsiveLayout(mode);
    }
});
