import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userDado : string = "";
  passDado : string ="";
  loginStatus: boolean;  
  mensaje :string ="";
  loginUserName:string="";

  //Creamos el array listaUsuarios
  listaUsuarios:Usuario[] = []
  usuario : Usuario

  constructor() { 
    let user:Usuario = new Usuario("user","123");
    this.listaUsuarios.push(user);
    let user2 = new Usuario("david","456");
    this.listaUsuarios.push(user);

  }
/*metodo para chequear si hay un usuario y un password en la lista creada*/
  public checkLogin( userDado : string , passDado: string){
    console.log("checking....")
    console.log(this.listaUsuarios)
    console.log (userDado)
    console.log (passDado)
    /*Recorre la lista de usuarios para comprobar*/
    for (let usuarios of this.listaUsuarios ){
      console.log(this.listaUsuarios)
      if ((userDado.match(usuarios.username)) && (passDado.match(usuarios.password))){       
        this.mensaje="USUARIO LOGUEADO. AHORA PUEDES VER EL LISTADO DE VIDEOJUEGOS";/*Muestra mensaje en pantalla*/
        console.log ("logueado como: " + this.loginUserName);     
      }
      else
        this.mensaje="ERROR DE LOGIN";

    }
  }
  

 
  
  

  ngOnInit(): void {
  }

  
}
