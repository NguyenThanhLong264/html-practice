function applyResponsiveLayout() {
    const width = document.documentElement.clientWidth;
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
    replaceIcon()
    toggleOpen();
}

window.addEventListener('load', applyResponsiveLayout);
window.addEventListener('resize', applyResponsiveLayout);