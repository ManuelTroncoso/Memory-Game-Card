$(document).ready(function(){
    let solucion = posicionesAleatorias();
    let array = Array();
    let cont = 0;
    let click = Array();
    for(let i = 0; i<10; i++ ){
        $("#cartas").append(`<div class="col-sm-4 carta" id="carta`+i+`">`+i+`</div>`);
        $( "#carta"+i ).click(function() {
            let j = 0;
            while(solucion[j].indexOf(i) == -1){
                j++;
            }
            click.push(j)
            //Añado la clase que le corresponda a cada carta
            $("#carta" + i).addClass(solucion[j][2])
            if(cont  == 1){
                array.push(i);
                console.log(compruebaArray(array, solucion));
                array = [];
                cont = 0;
                setTimeout(function(){
                    $("."+solucion[click[0]][2]).removeClass(solucion[click[0]][2]);
                    $("."+solucion[click[1]][2]).removeClass(solucion[click[1]][2]);

                    click = [];
                }, 3000); 
                                 
            }else{
                array.push(i);
                //console.log(array)
                cont++;
            }         
        });
    }  

});

//Funcion para asignar parejas de cartas.
function posicionesAleatorias(){
    //Clases y parejas de numeros
    let clase = ["js", "php", "html5", "css3", "linux"];
    let parejas = Array();

    //Podemos tener un array ordenado y desordenarlo para obtener las parejas, cada dos es una pareja.
    let lista = [0,1,2,3,4,5,6,7,8,9];
    lista = lista.sort(function() {return Math.random() - 0.5});
    //Coger de dos en dos los valores y añadirlos al array
    //Con este bucle se añade las parejas al array de parejas.
    let i = 0;
    while(lista.length!= 0){
        let temp = [lista[0], lista[1], clase[i]];
        parejas.push(temp);
        lista.splice(0,2);
        i++;
    }
    //console.log(parejas)
    return parejas;
}

//Función que recibe las cartas pulsadas y la comprueba con la solucíon para ver si es correcta.
function compruebaArray(pulsada, solucion){
    let cont = 0;
    //Recorro el array de las palabras pulsadas con el array de las solucion y compruebo si coinciden
    for(let i = 0; i<solucion.length; i++){
        cont = 0;
        for(let j = 0; j<2;j++){
            //En caso de que el coincida se le sumará uno al contador
            if(pulsada[0] == solucion[i][j] || pulsada[1] == solucion[i][j] ){
                cont++
            }
        }
        //Si el contador llega a 2 dira que las dos pulsadas coincide con alguna solución en caso contrario 
        //el contador se reseteara y seguirá comprobando hasta que terminen todas las soluciones.
        if(cont == 2){return true}
    }
    return false;
}

