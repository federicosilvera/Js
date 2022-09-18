let login=document.getElementById("login");
let user_logi=document.getElementById("user_logi");
let pass_logi=document.getElementById("pass_logi");
let ingresar =document.getElementById("ingresar");

let registro=document.getElementById("registro");
let user_regi=document.getElementById("user_regi");
let pass_regi=document.getElementById("pass_regi");
let registrar=document.getElementById("registrar");
let usuarios =[];

class Usuario {
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña =contraseña;
    }
}

if(window.location.pathname.includes("index.html")) {
    registro.addEventListener("submit", (e)=>{
        e.preventDefault();
    
        if(user_regi != "" && pass_regi !=""){
        let nuevo_usuario = new Usuario(user_regi.value, pass_regi.value);
        usuarios.push(nuevo_usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location.href="./pages/login.html";
    }
    } )
}

if(window.location.pathname.includes("login.html")){
    login.addEventListener("submit", (e)=>{
        e.preventDefault();
        let user=user_logi.value;
        let pass=pass_logi.value;
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))

        for(let account of usuarios){
            if(user == account.usuario && pass == account.contraseña){
                window.location.href="home.html";
            }
        }
    })
}