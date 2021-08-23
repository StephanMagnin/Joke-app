// Ciblage des éléments dans le html
const header = document.getElementById("header");
const content = document.getElementById("content");

// fonction pour afficher le contenu de l'api + requete
function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((response) => response.json())
    .then((data) => {
      const joke = data.data.content;
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}

getJoke();

// Changement de blague à chaque fois que l'on clic sur le body
document.body.addEventListener("click", getJoke);