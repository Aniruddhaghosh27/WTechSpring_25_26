var form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){

event.preventDefault();

var fname = document.getElementById("fname").value.trim();
var lname = document.getElementById("lname").value.trim();
var sid = document.getElementById("sid").value.trim();
var email = document.getElementById("email").value.trim();
var credit = document.getElementById("credit").value;
var dept = document.getElementById("dept").value;

if(fname==""){
    alert("First Name is required");
    return;
}

if(lname==""){
    alert("Last Name is required");
    return;
}

if(sid.indexOf("-")==-1){
    alert("Student ID must contain '-'");
    return;
}

if(email.indexOf("@student.aiub.edu")==-1){
    alert("Invalid AIUB Student Email");
    return;
}

if(credit=="" || credit<0 || credit>=148){
    alert("Credit must be between 0 and 147");
    return;
}

if(dept==""){
    alert("Select Department");
    return;
}

var table=document.getElementById("studentTable");

var row=table.insertRow(-1);

row.insertCell(0).innerHTML=fname+" "+lname;
row.insertCell(1).innerHTML=sid;
row.insertCell(2).innerHTML=email;
row.insertCell(3).innerHTML=credit;
row.insertCell(4).innerHTML=dept;

form.reset();

alert("Registration Successful");

});