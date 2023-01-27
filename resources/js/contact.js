/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

const formulario = document.getElementById("form");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(`me diste un click`);

// new FormData lo que está haciendo es crear una nueva información del formulario
    const datos = new FormData(formulario); 
    console.log(datos);

    console.log(datos.get("name"));
    console.log(datos.get("email"));
    console.log(datos.get("tel"));
    console.log(datos.get("message"));

    // manda la información
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
        method: 'POST',
        body: datos
    })
    // recibe la información
        .then(res => res.json())
        // devuelve la información
        .then(datos => {
            console.log(datos);
            if(datos === ""){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                Llena todos los campos
      </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-succes" role="alert">
                Tus datos se han enviado
      </div>
                `
            }
        })
        .catch((error) => console.log(error));
})
