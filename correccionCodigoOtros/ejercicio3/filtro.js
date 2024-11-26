// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/assets/taco-negro.jpg" }, //Imagenes movidas a la carpeta assets
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/assets/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "/assets/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "/assets/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/assets/zapato-rojo.jpg" }
]

const $lista = document.getElementById("lista-de-productos");
const $input = document.querySelector('input');// se quitó el '.input' 

for (let i = 0; i < productos.length; i++) {

  let $producto = document.createElement("div");
  $producto.classList.add("producto");

  let $titulo = document.createElement("p");
  $titulo.classList.add("titulo");
  $titulo.textContent = productos[i].nombre;

  let $imagen = document.createElement("img");
  $imagen.setAttribute('src', productos[i].img);

  $producto.appendChild($titulo);
  $producto.appendChild($imagen);
  $lista.appendChild($producto);
}

//displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while ($lista.firstChild) {
    $lista.removeChild($lista.firstChild);
  }

  const texto = $input.value;
  const textoEntrada = texto.toLowerCase();
  console.log(textoEntrada);
  const productosFiltrados = filtrado(productos, textoEntrada);

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div");
    d.classList.add("producto");

    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);
    $lista.appendChild(d);
  }
}

  const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  