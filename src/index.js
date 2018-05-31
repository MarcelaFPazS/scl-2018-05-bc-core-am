/* Acá va tu código */
/*  primera función para ingresar nombre de la persona y recibir instrucciones*/
function Function (){
  let user = document.getElementById("name").value;
  let p = document.getElementById("welcomeMsje2");
  p.innerHTML =   user + "  .Pasos a seguir 1.-introduce el número de espacios de desplazamiento, 2.-Escribe tu Texto, 3.-Codifica o decodifica, 4.-Listo!!";
}






/* listado para activar el codificado  */
const cifrado= document.getElementById("enviarcode").addEventListener("click",()=>{
   /*para guardar el texto que ingreso el usuario en texarea */
  let codEnviado = document.getElementById("primertextocuadro").value;
  /*para guardar el numero que ingreso el usuario en texarea */
  let codNumeros = document.getElementById("ndecode").value;
  /*para enlazar el texto codificado*/
  let resultEncoded = window.cipher.encode(codEnviado, codNumeros); 
  document.getElementById("segundotextocuadro").innerHTML = resultEncoded;
})


/* listado para activar el codificado  */
const decifrado= document.getElementById("traerdecode").addEventListener("click",()=>{
   /*para guardar el texto que ingreso el usuario en texarea */
  let codEnviado = document.getElementById("primertextocuadro").value;
  /*para guardar el numero que ingreso el usuario en texarea */
  let codNumeros = document.getElementById("ndecode").value;
  /*para enlazar el texto codificado*/
  let resultEncoded = window.cipher.decode(codEnviado, codNumeros); 
  document.getElementById("segundotextocuadro").innerHTML = resultEncoded;
})
