window.cipher = {
  encode: (/*aca va el nombre*/) => {
    /* Acá va tu código funcion */
  },
  decode: () => {
    /* Acá va tu código */
  }
}


const encode = () =>{
  const name = " aqui va el nombre la const"
  let result="";
  for (let i=0; i<name.length; i++){
    var textChar = ((name.charCodeAt(i) - 65 +3) %26) + 65;
    var textCipher = string.fromCharCode(textChar);

  }
}



const decode = () =>{
  const name = "lala"
  let result="";
  for (let i=0; i<name.length; i++){
    var textChar = ((name.charCodeAt(i) - 65 -3) %26) + 65;
    var textCipher = string. fromCharCode(textChar);
    
  }
}