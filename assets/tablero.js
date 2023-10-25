console.log("entro a tablero")
let Tablero = document.getElementById("Tablero");

fetch('https://dummyjson.com/carts', {method: "GET"})
.then(res => res.json())
.then(data => {
    renderizado(data);
}).catch(error => console.log(error))


function renderizado(data) {
    console.log("entro a funcion");
    const rawCarts = data;
    const Cartas = rawCarts.carts;
    console.log(Cartas);
    Cartas.forEach(Carta => {
        Tablero.innerHTML = Tablero.innerHTML + `
        <div class="card" style="width: 18rem">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
      `;
});
}