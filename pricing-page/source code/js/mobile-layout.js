let lastMode = window.innerWidth < 768 ? 'mobile' : 'desktop';

function applyResponsiveLayout(mode) {
    if (mode === 'mobile') {
        featureMobileLayout();
        mobileTable();
    } else {
        featureDesktopLayout();
        laptopTable();
        highlightMainHeader(1);
        highlightPopularColumn(2);
    }
    displayForm()
}

window.addEventListener('load', () => {
    applyResponsiveLayout(lastMode);
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const mode = width < 768 ? 'mobile' : 'desktop';

    if (mode !== lastMode) {
        lastMode = mode;
        applyResponsiveLayout(mode);
    }
});
