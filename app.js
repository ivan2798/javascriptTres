//DOM - Document Object Model

//String Literals - Template literals // Cadenas literals

let url = "https://www.cuttevents.online";
let ruta = "experiencia-online";

let rutaCompleta = url + "/" + ruta;

let rutaCompletaLiteral = `${url}/${ruta}`;

console.log(rutaCompleta);

console.log(rutaCompletaLiteral);

//DOM

document.getElementById("test").innerHTML = 
`<a href="${rutaCompletaLiteral}">${rutaCompletaLiteral}</a>`
 //tope y busca test


let r=0;
let g=0;
let b=0;

let rgb = "rgb("+r+","+g+","+b+")";

let rgbLiteral = `rgb(${r},${g},${b})`;

console.log(rgb);
console.log(rgbLiteral);
