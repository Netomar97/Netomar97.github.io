var option = prompt("Introduzca un numero");
var memory = [];
var NPrimos = [];

   //Botones de opciones
    let multiplos_2 = document.getElementById("multiplos_2");
    let multiplos_3 = document.getElementById("multiplos_3");
    let multiplos_4 = document.getElementById("multiplos_4");
    let multiplos_5 = document.getElementById("multiplos_5");
    let multiplos_6 = document.getElementById("multiplos_6");
    let multiplos_7 = document.getElementById("multiplos_7");
    let multiplos_8 = document.getElementById("multiplos_8");
    let multiplos_9 = document.getElementById("multiplos_9");
    let num_primos = document.getElementById("numer_prim");
    let clear = document.getElementById("limp");
    
function entrada(){
    if(option==null || option=="") {
            alert("Introduce un numero");
        }else if(option < 2){
            alert("Ingrese un numero mayor que 10");
        }else if(option >= 2){
   
            for (let a = 1; a <= option; a++) {
                const buttton = document.createElement('button');
                buttton.type = 'button';
                buttton.id = 'boton'+a;
                buttton.value = ""+a;
                buttton.innerText = a;
                buttton.style.height = "30px";
                buttton.style.width = "40px";
                buttton.style.marginRight = "4px";
                buttton.style.background = "#C0C0C0";
                buttton.style.border=100;
                
                if(a==1){
                    buttton.style.background = "#C0C0C0";
                }

                document.getElementById("lb").appendChild(buttton);
                
            }
        } 
    }

    entrada();
    
    multiplos_2.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 2 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FF0000";
                memory.push(a);
            }
        }
    }   
    
  
    multiplos_3.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 3 == 0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FFFF00";
                memory.push(a);
            }
        }
    }

    
    multiplos_4.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 4 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#00FFFF";
                memory.push(a);
            }
        }
    } 

    
    multiplos_5.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 5 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#008080";
                memory.push(a);
            }
        }
    }

    
    multiplos_6.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 6 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FF00FF";
                memory.push(a);
            }
        }
    }

  
    multiplos_7.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 7 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FFEA00";
                memory.push(a);
            }
        }
    }

    
     multiplos_8.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 8 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#800080";
                memory.push(a);
            }
        }
    }

  
    multiplos_9.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 9 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background=  "#FF5733";
                memory.push(a);
            }
        }
    }

    
    numer_prim.onclick = function() {
        var count=0;
        for(let k=2; k<=option; k++){
            for (let r = 2; r<=option; r++) {
               if (k%r==0) {
                   count++;
            }
        }
        if(count==1){
            count=0;
            document.getElementById("boton"+k).style.background = "#FA8072";
            memory.push(k);

        }else if(count>1){
            count=0;
        }
    }
}
    
    clear.onclick = function() {
        for(let a=2; a<= option; a++){
            document.getElementById("boton"+a).style.background= "#C0C0C0";
            memory=[];
        }
    }