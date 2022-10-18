let sottr = document.getElementById('sottrButton');
let add =  document.getElementById('addButton');
let numero = document.getElementById('number');

add.onclick = function(event){
 let incr = numero.innerHTML ++ ;
}

sottr.onclick = function(event){
 let incr = numero.innerHTML -- ;

 }

