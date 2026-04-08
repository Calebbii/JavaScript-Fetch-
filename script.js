console.log("It works")

const baseUrl = "http://localhost:3000/characters"

// console.log(baseUrl)

// Fetch
fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        displayContent(data)
    })


// Assignment in the next 10 mintues Create a function called displayContent that is going to display our data to the browser

// Function syntax
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