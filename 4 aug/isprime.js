function myfun(){
    let a=document.getElementById("n1").value;

    let d=2;
    a=Number(a);
    d=Number(d);
    if(a<=1){
        document.getElementById("p1").innerHTML=a+" is not prime.";
        return;
    }
    
    while(d*d<=a){
        if(a%d==0){
            document.getElementById("p1").innerHTML=a+" is not prime.";
            return;
        }
        d=d+1;
    }
    document.getElementById("p1").innerHTML=a+" is prime.";
}