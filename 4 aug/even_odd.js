function myfun(){
    let a=document.getElementById("n1").value;

    
    a=Number(a);
    
    if(a%2==0){
        document.getElementById("p1").innerHTML=a+" is Even.";
        return;
    }
    else{
        document.getElementById("p1").innerHTML=a+" is odd.";
        return;
    }
    
    
}