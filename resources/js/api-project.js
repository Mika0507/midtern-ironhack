/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */
let getExternalApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((respuestas) => {
        console.log (respuestas);
        respuestas.forEach((element, i) => {
          console.log(i);
          if (i < 3){
          document.querySelector(`#text${i+1} h4`).innerHTML = element.title;
          document.querySelector(`#text${i+1} p`).innerHTML = element.body;
          }
        });
        /* for (let i = 0; i < 3; i++) {
          document.querySelector(`#text${i+1} h3`).innerHTML = respuestas[i].title;
          document.querySelector(`#text${i+1} p`).innerHTML = respuestas[i].body;
        } */
    })
    .catch((error) => console.log(error));
};
getExternalApi ()