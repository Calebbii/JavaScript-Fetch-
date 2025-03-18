console.log('Hello')

const baseURL = "http://localhost:3000/characters"

fetch(baseURL)
  .then(res => res.json())
  .then(data => {
    displayContent(data)
  })
  .catch(error => console.log(error))


function displayContent(data) {
  const dataContainer = document.getElementById("data");
  dataContainer.innerHTML = ''; 

  data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `ID: ${item.id}, Name: ${item.name}`;
      dataContainer.appendChild(itemElement);
  });
}
// console.log("Hello")


// const baseURL = 'http://localhost:3000/characters'

// fetch(baseURL)
// .then(res => res.json())
// .then(console.log(data))


console.log('WRC Rally')

const baseUrl = "http://localhost:3000/characters"

fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        displayContent(data)
    })

    function displayContent(data) {
      const dataContainer = document.getElementById("data");
      dataContainer.innerHTML = ''; 
    
      data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.textContent = `ID: ${item.id}, Name: ${item.name}`;
          dataContainer.appendChild(itemElement);
      });
    }