/*probar en prueba.html*/

function suma(){
  var suma=0;
  var i=0;
  do{
    var number = prompt('Introduzca el número:['+i+']=');
          suma = suma + parseInt(number);                      
              i=i+1;
  } while(i<10);
  alert('La suma de los números es: '+ suma);
}
              

suma();