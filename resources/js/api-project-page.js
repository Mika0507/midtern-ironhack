let getExternalApiBody = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((respuestas) => {
        console.log (respuestas);
        
          document.querySelector("#text-project-page").innerText = respuestas.body;
          
        /* for (let i = 0; i < 3; i++) {
          document.querySelector(`#text${i+1} h3`).innerHTML = respuestas[i].title;
          document.querySelector(`#text${i+1} p`).innerHTML = respuestas[i].body;
        } */
    })
    .catch((error) => console.error(error));
};
getExternalApiBody ()