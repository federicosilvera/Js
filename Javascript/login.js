let login=document.getElementById("login");
let user_logi=document.getElementById("user_logi");
let pass_logi=document.getElementById("pass_logi");
let ingresar =document.getElementById("ingresar");


if(window.location.pathname.includes("/pages/login.html")){
    login.addEventListener("submit", (e)=>{
        e.preventDefault();
        let user=user_logi.value;
        let pass=pass_logi.value;
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))

        for(let account of usuarios){
            if(user == account.usuario && pass == account.contraseña){
                window.location.href="./home.html";
            }
        }
    })
}