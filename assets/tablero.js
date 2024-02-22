console.log("entro a tablero");
let Tablero = document.getElementById("Tablero");

let loading = false;

fetch('https://fakestoreapi.com/products/', { method: "GET" })
  .then(response => response.json())
  .then(data => {
    renderizado(data);
    console.log(data);
  })
  .catch(error => console.log(error))


function renderizado(data) {
  console.log("entro a funcion");
  const rawCarts = data;
  const Cartas = rawCarts;
  console.log(Cartas);
  Cartas.forEach(Carta => {
    Tablero.innerHTML += `
       <div class="shadow p-3 m-2 bg-body-tertiary rounded gap-3" style="width: 25rem;">
       <img src="${Carta.image}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${Carta.price}</h5>
         <h5 class="card-title">prueba</h5>
         <p class="card-text">${Carta.description}</p>
         <a href="${Carta.url}" class="btn btn-primary">${Carta.source.name}</a>
       </div>
     </div>

     `;
  });
}