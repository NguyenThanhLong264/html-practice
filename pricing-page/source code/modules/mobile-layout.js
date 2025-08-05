function applyResponsiveLayout() {
    const width = document.documentElement.clientWidth;
    console.log(width);

    if (width < 768) {
        renderMobileLayout();
        mobileTable();
    } else {
        renderLaptopLayout()
        laptopTable()
        highlightMainHeader(2)
        highlightPopularColumn(3)
        toggleTable();
    }
}

window.addEventListener('load', applyResponsiveLayout);
window.addEventListener('resize', applyResponsiveLayout);