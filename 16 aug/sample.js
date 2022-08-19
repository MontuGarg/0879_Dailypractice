var fname;

function func(){
    fname=document.getElementById('Fname').value;
    localStorage.setItem("f_name",fname);

    lname=document.getElementById('Lname').value;
    localStorage.setItem("l_name",lname);

    email=document.getElementById('email').value;
    localStorage.setItem("e_mail",email);

    Mnumber=document.getElementById('Mnumber').value;
    localStorage.setItem("M_number",Mnumber);

}
function fun1(){
    document.getElementById('demo').innerHTML="First Name is "+localStorage.getItem("f_name")+"<br>";

    document.getElementById('demo').innerHTML+="Last Name is "+localStorage.getItem("l_name")+"<br>";

    document.getElementById('demo').innerHTML+="Email address is "+localStorage.getItem("e_mail")+"<br>";

    document.getElementById('demo').innerHTML+="Mobile Number is "+localStorage.getItem("M_number")+"<br>";

    
}
