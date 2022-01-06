y = []
function buttonclicked(x, z) {

    if (y.includes(1) == true) {
        document.getElementById(x).innerHTML = "O"
        document.getElementById(z).disabled = true;

        y.pop()
     



    } else {
        document.getElementById(x).innerHTML = "X"
        document.getElementById(z).disabled = true;
        y.push(1)
      


    }
  one=[document.getElementById(4).innerHTML && document.getElementById(5).innerHTML && document.getElementById(6).innerHTML]
  two=[document.getElementById(1).innerHTML && document.getElementById(2).innerHTML && document.getElementById(3).innerHTML] 
  three=[document.getElementById(7).innerHTML && document.getElementById(8).innerHTML && document.getElementById(9).innerHTML] 
  four=[document.getElementById(1).innerHTML && document.getElementById(4).innerHTML && document.getElementById(7).innerHTML] 
  five=[document.getElementById(5).innerHTML && document.getElementById(2).innerHTML && document.getElementById(8).innerHTML]
  six=[document.getElementById(9).innerHTML && document.getElementById(3).innerHTML && document.getElementById(6).innerHTML] 
  seven=[document.getElementById(4).innerHTML && document.getElementById(2).innerHTML && document.getElementById(9).innerHTML] 
  eight=[document.getElementById(7).innerHTML && document.getElementById(2).innerHTML && document.getElementById(6).innerHTML]    
  if (one=="X"){
        console.log("CONGRATS || X WON")
    }else if(one=="O"){
        console.log("CONGRATS || O WON")

    }
    if (two=="X"){
        console.log("CONGRATS || X WON")
    }else if(two=="O"){
        console.log("CONGRATS || O WON")

    }   
    if (three=="X"){
        console.log("CONGRATS || X WON")
    }else if(three=="O"){
        console.log("CONGRATS || O WON")

    }   
    if (four=="X"){
        console.log("CONGRATS || X WON")
    }else if(four=="O"){
        console.log("CONGRATS || O WON")

    }   
    if (five=="X"){
        console.log("CONGRATS || X WON")
    }else if(five=="O"){
        console.log("CONGRATS || O WON")

    }     if (six=="X"){
        console.log("CONGRATS || X WON")
    }else if(six=="O"){
        console.log("CONGRATS || O WON")

    }   
    if (seven=="X"){
        console.log("CONGRATS || X WON")
    }else if(seven=="O"){
        console.log("CONGRATS || O WON")

    }   
    
    if (seven=="X"){
        console.log("CONGRATS || X WON")
    }else if(seven=="O"){
        console.log("CONGRATS || O WON")

    }   
    
    


}




