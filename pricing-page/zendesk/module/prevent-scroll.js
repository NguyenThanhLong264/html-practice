window.addEventListener("load", () => {
    history.replaceState(null, "", location.pathname);
    window.scrollTo(0, 0);
});