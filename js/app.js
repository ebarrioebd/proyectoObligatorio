function fc()
{   
    console.log("hola");
    //document.body.style.backgroundImage = "url('img/img1.jpg')";
    //document.getElementById("dimg").style.backgroundImage= "url('img/img1.jpg')";
  document.getElementById("p").innerHTML="<img id=\"camb\" src=\"img/sol.jpg\"  ><div class='texto'>Sol</div>";
  document.getElementById("p_texto").innerHTML="El Sol es una estrella variable, es decir, una gran bola de gas resplandeciente que evoluciona con el tiempo.  ";
}
function fc1()
{   
    console.log("hola");
    //document.body.style.backgroundImage = "url('img/img1.jpg')";
    //document.getElementById("dimg").style.backgroundImage= "url('img/img1.jpg')";
  document.getElementById("p").innerHTML="<img id=\"camb\"  src=\"img/proximac.jpg\"   ><div class='texto'> Próxima Centauri</div>";
  document.getElementById("p_texto").innerHTML="Es una estrella enana roja de 11ª magnitud aparente situada a aproximadamente 4,22 años luz";
}
function fc2()
{   
    console.log("hola");
    //document.body.style.backgroundImage = "url('img/img1.jpg')";
    //document.getElementById("dimg").style.backgroundImage= "url('img/img1.jpg')";
  document.getElementById("p").innerHTML="<img id=\"camb\"  src=\"img/gsombrero.jpg\"   ><div class='texto'>Sol</div>";
  document.getElementById("p_texto").innerHTML=" Es una galaxia lenticular de la constelación de Virgo a una distancia de 28 millones de años luz."
}
function nom(){
    
   /* var nom=document.getElementById("nombre").value;
    var ema=document.getElementById("email").value;
    var men=document.getElementById("asunto").value; 

    if(nom!=""&&ema!=""&&men!=""){
        document.getElementById('limpiar').disabled=false;
        document.getElementById('enviar').disabled=false;
        document.getElementById("enviar").style.backgroundColor = "";//"#00ffcd96";
        document.getElementById("limpiar").style.backgroundColor = "";//"#00ffcd96";
    } */
    var validado = true;
        elementos = document.getElementsByClassName("in");
        for(i=0;i<elementos.length;i++){
              if(elementos[i].value == "" || elementos[i].value == null){
              validado = false
                }
             }
            if(validado){
            document.getElementById("enviar").disabled = false;
            document.getElementById("limpiar").disabled = false;
        
            document.getElementById("enviar").style.backgroundColor = "";//"#00ffcd96";
            document.getElementById("limpiar").style.backgroundColor = "";//"#00ffcd96";
            }else{
             document.getElementById("enviar").disabled = true;
            document.getElementById("limpiar").disabled = true;
            document.getElementById("limpiar").style.backgroundColor = "gray";
            document.getElementById("enviar").style.backgroundColor = "gray";
            //Salta un alert cada vez que escribes y hay un campo vacio
            //alert("Hay campos vacios")   
        }
} 

 
function win(){
    

    if(document.getElementById('enviar').getAttribute ('disabled')!=null){
        document.getElementById("enviar").style.backgroundColor = "gray";
    }
    if(document.getElementById('limpiar').getAttribute ('disabled')!=null){
        document.getElementById("limpiar").style.backgroundColor = "gray";
    }
}

    function limpiar(){
     
        var opcion=confirm("esta seguro de borrar toda la informacion capturada?");
        if(opcion==true){
            elementos = document.getElementsByClassName("in");
            for(i=0;i<elementos.length;i++){ 
                  elementos[i].value=""; 
               }
               document.getElementById("enviar").disabled = true;
               document.getElementById("limpiar").disabled = true; 
               
            document.getElementById("limpiar").style.backgroundColor = "gray";
            document.getElementById("enviar").style.backgroundColor = "gray";
           alert("echo");
        }
        else{
           //alert(" ");
          }
        }
        function enviar(){ 
            var opcion=confirm("enviar?");
            if(opcion==true){
                document.getElementById("enviar").disabled = true;
                document.getElementById("limpiar").disabled = true; 
                
            document.getElementById("limpiar").style.backgroundColor = "gray";
            document.getElementById("enviar").style.backgroundColor = "gray";
                elementos = document.getElementsByClassName("in");
                for(i=0;i<elementos.length;i++){ 
                      elementos[i].value="";  
                   }
            
               alert("!Tu mensaje fue enviado Exitosamente¡");
            }
            else{
               //alert(" ");
              }
            }