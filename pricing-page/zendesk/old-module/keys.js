function createKeyById(title, description, imgUrl) {
    featuresContent.innerHTML = `
        <h1>${title}</h1> 
        <p>${description}</p> 
        ${imgUrl ? `<img src=${imgUrl} alt="img"/>` : ''
        } `
}