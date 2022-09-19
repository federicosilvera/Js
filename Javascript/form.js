

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

if(window.location.pathname.includes("/")) {
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

