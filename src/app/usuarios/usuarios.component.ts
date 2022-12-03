import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userDado : string = "";
  passDado : string ="";
  statusLogin = false;
  mensaje :string ="";

  //Creamos el array listaUsuarios
  listaUsuarios:Usuario[] = []

  constructor() { 
    let user:Usuario = new Usuario("user","123");
    this.listaUsuarios.push(user);
    user = new Usuario("david","456");
    this.listaUsuarios.push(user);
  }

  public checkLogin( userDado : string , passDado: string){
    console.log("checking....")
    console.log(this.listaUsuarios)
    console.log (userDado)
    console.log (passDado)
    for (let user of this.listaUsuarios ){
      console.log(this.listaUsuarios)
      if ((userDado.match(user.username)) && (passDado.match(user.password))){
        this.statusLogin = true;
        this.mensaje="USUARIO LOGUEADO"
      }
      else
        this.mensaje="ERROR DE LOGIN"

    }
  }
  

 
  
  

  ngOnInit(): void {
  }

}
