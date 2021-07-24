function retornar(letras,letra,dni){
    if(dni<=0 || dni>99999999){
        return 'Numero no valido';
    }else{
        var auxi=dni%23;
        console.log(letras[auxi]);
        var l='';
        if(letra===letras[auxi]){
            return 'La letra y el DNI coinciden';
        }else{
            return 'La letra no coincide con el DNI'
        }
    }
}


var letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
console.log(retornar(letras,'Z',24196210));