btn_add = document.getElementById('btn-add')
btn_add.addEventListener('click', addUser)

btn_clear = document.getElementById('btn-clear')
btn_clear.addEventListener('click', clean)


function addUser() {
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        const pic = data.results[0].picture.medium;
        const name = data.results[0].name.first;
        const lastname = data.results[0].name.last;
        const city = data.results[0].location.city;
        const country = data.results[0].location.country;
        const postcode = data.results[0].location.postcode;

        const users = document.getElementById('card');
        const userContainer = document.createElement('div')
        
        userContainer.classList.add('user')
   
        const imageElement = document.createElement("img")
        imageElement.src = pic;
        userContainer.appendChild(imageElement);
        userContainer.innerHTML += `
        <p>Name: ${name} ${lastname}</p>
        <p>City: ${city}</p>
        <p>Country: ${country}</p>
        <p>Postcode: ${postcode}</p>
        `;

        users.appendChild(userContainer)

     })
    .catch(error => {
        console.log('Помилка отримання даних:', error);
    })
}

function clean() {
    const users = document.getElementById('card');
    users.innerHTML = ''
}

