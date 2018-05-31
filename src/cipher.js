window.cipher = {
  encode: (codEnviado, codNumeros) => {
    /* Acá va tu código funcion */
    let result="";
    for (let i=0; i<codEnviado.length; i++){
    let posicion = codEnviado.charCodeAt(i);

    /*valores para letras Mayusculas */
    if ((posicion >=65)&&(posicion<=90)){
      let formula= (posicion-65 + parseInt(codNumeros)) % 26 +65;
      result += String.fromCharCode(formula);
    }
    
  /*valores para letras minusculas */
    if((posicion >=97) &&(posicion<=122)){
      let formula=(posicion -97 + parseInt(codNumeros))% 26 + 97;
      result += String.fromCharCode(formula);
    }


    }
return result;

  }, 


  decode: (codEnviado, codNumeros) => {
    /* Acá va tu código */
    let result2="";
    for (let i=0; i<codEnviado.length; i++){
    let posicion = codEnviado.charCodeAt(i);

    /*valores para letras Mayusculas */
    if ((posicion >=65)&&(posicion<=
      90)){
      let formula= (posicion -65 - parseInt(codNumeros)) % 26 + 65;
      result2 += String.fromCharCode(formula);
    }
    
  /*valores para letras minusculas */
    if((posicion >=97) &&(posicion<=122)){
      let formula=(posicion -122 - parseInt(codNumeros))% 26 + 122;
      result2 += String.fromCharCode(formula);
    }


    }
return result2;

  }
  
}




