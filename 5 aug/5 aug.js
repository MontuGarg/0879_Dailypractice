function myfun(){
    let sum=0;
    let count=0;
    sum=Number(sum);
    function change(value){
        sum=sum+Number(value);
        count=count+1;
        return Number(value);
    }
    let a=document.getElementById("n1").value;
    let arr=a.split("");
    arr.map(change);
    if(count==5){
        document.getElementById("square").style.width=sum+"px";
        document.getElementById("square").style.height=sum+"px";
        let rad=sum/5;
        document.getElementById("square").style.borderRadius=rad+"px";
        document.getElementById("p1").innerHTML="";
    }else{
        document.getElementById("p1").style.color="red";
        document.getElementById("p1").innerHTML="Please enter 5 digits.";
        document.getElementById("square").style.width="0px";
        document.getElementById("square").style.height="0px";
        document.getElementById("square").style.transitionProperty="none";

    }
    
}