
function darkMode(){
    let dark = document.querySelector(".total");
    let footer = document.querySelector("footer");
    dark.style.backgroundColor = "#0c0c0c";
    footer.style.backgroundColor = " #FFF0E9";
}
function avalid(event){
    event.preventDefault();
    let register = document.getElementById("register");
    let login = document.getElementById("login");

    let username = document.getElementById("username").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let role = document.getElementById("role").value;
    localStorage.setItem("role",role);
    let copass = document.getElementById("copass").value;
    let error = document.getElementById("error");
    let test = "";

    if(username.length < 5){
       test = "please enter valid user_name"
       error.innerHTML = test ;
       return false;
    }
    else if(mail.indexOf("@")== -1 && mail.length < 10 ){
       test = "please enter valid email"
       error.innerHTML = test ;
       return false;
    }
    else if(pass.length < 8){
       test = "please enter valid password"
       error.innerHTML = test ;
       return false;
   }
   else if (copass == null || copass != pass){
       test = "please ener valid confirm password and cofirm your password"
       error.innerHTML = test ;
       return false;
   }
   else{
       login.style.display = "block";
       register.style.display = "none";
       return true; 
   }
}
function log(event){
    event.preventDefault();
    let enter = document.getElementById("enter");
    let stuff = document.getElementById("stuff");
    let customer = document.getElementById("customer");
    let customerplace = document.getElementById("customerplace");
    let role1 = localStorage.getItem("role");
    let footer = document.getElementById("footer");
    let main = document.getElementById("main");

    enter.style.display="none";
    main.style.display = "block";
    footer.style.display = "block";

    if(role1 == "Stuff" || role1 == "Admin"){
     stuff.style.display="block"
     customer.style.display="none"
     customerplace.style.display="none"
    }
    return true;
}
function upload(){
    let textProblem = document.getElementById("textProblem")
    let customer = document.getElementById("customer")
    let listStaff = document.getElementById("listStaff")
    let listAdmin = document.getElementById("listAdmin")
    let listCustomer = document.getElementById("listCustomer")
    let customerplace = document.getElementById("customerplace")
    let staff = document.getElementById("stuff")
    let role1 = localStorage.getItem("role");

    if(role1 === "Stuff" || role1 === "Admin"){
        textProblem.value = staff.value;
        staff.value = "";
        listCustomer.style.display = "none";
        if(role1 === "Stuff"){
            listStaff.style.display = "block";
        }else{
            listAdmin.style.display = "block";
        }

    }else{
        listCustomer.style.display = "block";
        textProblem.value = customerplace.value + "   "+ customer.value;
        customerplace.value="";
        customer.value="";
    }
}