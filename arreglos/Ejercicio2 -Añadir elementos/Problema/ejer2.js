function agregarElemento(array,elemento){
    array.push(elemento);
}

function mostrarArray(array){
    for(var i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

var vector=['Juan','Pedro'];
agregarElemento(vector,'Agregado');
mostrarArray(vector);