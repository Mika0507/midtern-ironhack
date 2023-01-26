/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
//  ------------------ HAMBURGUER MENU -----------------
console.log("Hay un elemento script llamándome");
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')
/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close');
  navWrapper.classList.toggle('show');
})

// Para esconder el contenedor cuando de le da click fuera
navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show');
    toggleButton.classList.remove('close');
  }
})