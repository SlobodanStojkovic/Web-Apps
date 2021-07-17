<<<<<<< HEAD
const buttonElement = document.querySelector('#button');
const jokeContainer = document.querySelector('.joke-container');

const url = 'https://api.chucknorris.io/jokes/random';


buttonElement.addEventListener('click', () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then(data => {
            jokeContainer.innerHTML = "";
            let joke = data.value;
            let $p = document.createElement("p");
            $p.textContent = joke;
            jokeContainer.append($p);
        })
});
=======
const buttonElement = document.querySelector('#button');
const jokeContainer = document.querySelector('.joke-container');

const url = 'https://api.chucknorris.io/jokes/random';


buttonElement.addEventListener('click', () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then(data => {
            jokeContainer.innerHTML = "";
            let joke = data.value;
            let $p = document.createElement("p");
            $p.textContent = joke;
            jokeContainer.append($p);
        })
});
>>>>>>> ca96dccb4e38411ae21f60629f8263dd05f26e9b
