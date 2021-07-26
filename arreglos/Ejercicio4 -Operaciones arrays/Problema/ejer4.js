var valores=[true,5,false,"hola","adios",2];
var auxiliar=[];
for(var i=0;i<valores.length;i++){
    if(typeof valores[i]==='string'){
        auxiliar.push(valores[i]);
    }
}
var mayor=auxiliar[0];
for(var i=0;i<auxiliar.length;i++){
    if(auxiliar[i]>mayor){
        mayor=auxiliar[i];
    }
}
console.log('Palabra mayor es: ',mayor);
console.log("Suma: "+valores[1]+valores[5]);
console.log("Resta: "+valores[1]-valores[5]);
console.log("Multiplicacion: "+valores[1]*valores[5]);
console.log("Division: "+valores[1]/valores[5]);
