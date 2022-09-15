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

registro.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(user_regi != "" && pass_regi !=""){
    let nuevo_usuario = new Usuario(user_regi.value, pass_regi.value);
    usuarios.push(nuevo_usuario);
    console.log(usuarios)
}
} )

login.addEventListener("submit", (e)=>{
    e.preventDefault();
    let user=user_logi.value;
    let pass=pass_logi.value;
    for(let account of usuarios){
        if(user==account.usuario && pass==user.contraseña){
            window.location.href="../index.html";
        }
    }
})