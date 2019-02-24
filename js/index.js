$(document).ready(function(){
    for(let i = 0; i<10; i++ ){
        $("#cartas").append(`<div class="col-sm-4 carta" id=carta"`+i+`">hola</div>`);
    }
    posicionesAleatorias();
});

//Funcion para asignar parejas de cartas.
function posicionesAleatorias(){
    //Parejas de numeros.
    let parejas = Array();

/*******************************************************/
    //FALLO EL ARRAY DEBE DE SER DE 10 NO DE 9 YA QUE LAS PAREJAS SINO NO SON EXACTAS
    //Todo los número que ya han aparecidos en el random
    //let aleatorios = Array();
    //Numero random nuevo que se puede ser añadido a Aleatorio
    //let ran; 
    //Con este bucle se le da los valores de las parejas a los numeros random.
    // for(let i = 0; i<9; i++){
    //     ran =Math.floor((Math.random() * 10) + 1);
    //     while(aleatorios.indexOf(ran) != -1){
    //         ran =Math.floor((Math.random() * 10) + 1);
    //     }
    //     aleatorios.push(ran)
    // }
/*******************************************************/


    //Podemos tener un array ordenado y desordenarlo para obtener las parejas, cada dos es una pareja.
    let lista = [1,2,3,4,5,6,7,8,9,10];
    lista = lista.sort(function() {return Math.random() - 0.5});
    //Coger de dos en dos los valores y añadirlos al array
    //Con este bucle se añade las parejas al array de parejas.
    while(lista.length!= 0){
        let temp = [lista[0], lista[1]];
        parejas.push(temp);
        lista.splice(0,2);
        console.log(parejas)
    }
    
}