//DOM - Document Object Model

//String Literals - Template literals // Cadenas literals

let url = "https://www.cuttevents.online";
let ruta = "experiencia-online";

let rutaCompleta = url + "/" + ruta;

let rutaCompletaLiteral = `${url}/${ruta}`;

console.log(rutaCompleta);

console.log(rutaCompletaLiteral);

//DOM

/*document.getElementById("test").innerHTML = 
`<a href="${rutaCompletaLiteral}">${rutaCompletaLiteral}</a>`*/
 //tope y busca test



/*
console.log(rgb);
console.log(rgbLiteral);
*/
/*document.getElementById("test").style.backgroundColor = rgbLiteral //rgb(0,0,0)*/

//otra manera
/*
let r=0;
let g=255;
let b=23;

let rgb = "rgb("+r+","+g+","+b+")";

let rgbLiteral = `rgb(${r},${g},${b})`;
document.body.innerHTML = `
<div id="test" style="background-color:rgb(${r},${g},${b})"> </div>
`
*/

//cambio de colores aleatorio

//definir una funcion
//esta funcion va a generar 3 numeros aleatorios
//estos 3 numeros van a añadirse a


//Arrow functions
const suma = (a,b) => {
    return a + b;
}

console.log(suma(4,5));

const randomColor = () => {
    let r = Math.floor(Math.random()*256);//aleatorio
    let g = Math.floor(Math.random()*256);//aleatorio
    let b = Math.floor(Math.random()*256);//aleatorio
    let divTest = `
    <div id="test" style="background-color:rgb(${r},${g},${b})"> </div>
    `;

    return divTest;

}

document.body.innerHTML = randomColor();

