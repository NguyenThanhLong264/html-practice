function applyResponsiveLayout() {
    const width = document.documentElement.clientWidth;
    console.log(width);

    if (width < 768) {
        renderMobileLayout(features);
    } else {
        renderLaptopLayout(features)
    }
}

window.addEventListener('load', applyResponsiveLayout);
window.addEventListener('resize', applyResponsiveLayout);