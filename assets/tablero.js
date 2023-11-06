console.log("entro a tablero");
let Tablero = document.getElementById("Tablero");

let loading = false;

fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-10-06&sortBy=publishedAt&apiKey=d57a251ca7e64105b0438ba839951d72', { method: "GET" })
  .then(response => response.json())
  .then(data => {
    renderizado(data);
  }).catch(error => console.log(error))


function renderizado(data) {
  console.log("entro a funcion");
  const rawCarts = data;
  const Cartas = rawCarts.articles;
  console.log(Cartas);
  Cartas.forEach(Carta => {
    Tablero.innerHTML += `
       <div class="shadow p-3 m-2 bg-body-tertiary rounded gap-3" style="width: 25rem;">
       <img src="${Carta.urlToImage}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${Carta.title}</h5>
         <p class="card-text">${Carta.description}</p>
         <a href="${Carta.url}" class="btn btn-primary">${Carta.source.name}</a>
       </div>
     </div>

     `;
  });
}