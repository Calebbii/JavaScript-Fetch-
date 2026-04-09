console.log("It works")

const base_url = "http://localhost:3000/characters"


// Fetch
fetch(base_url)
    .then(res => res.json())
    .then(data => {
        displayContent(data)
    })


// Function Syntax
// function nameOfFunc () {
// }

function displayContent(data) {
    const dataContainer = document.getElementById('data') // Finds an HTML element with id="data"
    dataContainer.innerHTML = '';

    data.forEach( item => {
        const itemElement = document.createElement('div')
        itemElement.textContent = `ID: ${item.id}, Name: ${item.name}`;

        // Create image
        const img = document.createElement('img')
        img.src = item.image
        img.alt = item.name

        // Append image
        itemElement.appendChild(img)

        dataContainer.appendChild(itemElement);
    })
}