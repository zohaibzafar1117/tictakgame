var one = prompt("Enter Player X Name")
var two = prompt("Enter Player O Name")
var r = 0;
var a = 0;
var t = document.getElementById("turn")
var xt = one + "'s turn"
var ot = two + "'s turn"
var z = 0;
t.innerText = xt

function cross(e){
    z++
    var d = e.innerText
   
    
    if(d == ""){
        a++  
      
    }
   
    var c = a%2
    
    if(c == 1){
        if(d == "" && r == 0){
            e.innerText = "X" 
            e.style.backgroundColor = "grey" 
            t.innerText = ot
        }
        
    }if(c == 0){
        if(d == "" && r == 0){
            e.innerText = "O"   
            e.style.backgroundColor = "grey"
            t.innerText = xt
        }
    }
 var f = document.getElementsByTagName("td")
 var a0 = f[0].innerText
 var a1 = f[1].innerText
 var a2 = f[2].innerText
 var a3 = f[3].innerText
 var a4 = f[4].innerText
 var a5 = f[5].innerText
 var a6 = f[6].innerText
 var a7 = f[7].innerText
 var a8 = f[8].innerText
 function tieder(){
    document.getElementById("result").innerText = " Its a tie"
 }

 if(z == 9 && r == 0){
 tieder()       
}
 function onewinner(){
    document.getElementById("result").innerText = one + " is winner"
    r = 1;
 }
 function twowinner(){
    document.getElementById("result").innerText = two + " is winner"
    r = 1;
}
 
if(a >= 5){
    if(a0 == "X" && a1 == "X" && a2 == "X"){
      
        onewinner()
    }
    if(a3 == "X" && a4 == "X" && a5 == "X"){
        onewinner()
        
    }
    if(a6 == "X" && a7 == "X" && a8 == "X"){
        onewinner()
    }
    if(a0 == "X" && a3 == "X" && a6 == "X"){
        onewinner()
    }
    if(a1 == "X" && a4 == "X" && a7 == "X"){
        onewinner()
    }
    if(a2 == "X" && a5 == "X" && a8 == "X"){
        onewinner()
    }
    if(a0 == "X" && a4 == "X" && a8 == "X"){
        onewinner()
    }
    if(a2 == "X" && a4 == "X" && a6 == "X"){
        onewinner()
    }
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    if(a0 == "O" && a1 == "O" && a2 == "O"){
        twowinner()
    }
    if(a3 == "O" && a4 == "O" && a5 == "O"){
        twowinner()
    }
    if(a6 == "O" && a7 == "O" && a8 == "O"){
        twowinner()
    }
    if(a0 == "O" && a3 == "O" && a6 == "O"){
        twowinner()
    }
    if(a1 == "O" && a4 == "O" && a7 == "O"){
        twowinner()
    }
    if(a2 == "O" && a5 == "O" && a8 == "O"){
        twowinner()
    }
    if(a0 == "O" && a4 == "O" && a8 == "O"){
        twowinner()
    }
    if(a2 == "O" && a4 == "O" && a6 == "O"){
        twowinner()
    }
    
}



}







    