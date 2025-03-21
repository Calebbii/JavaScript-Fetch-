console.log('Hello')


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