import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../entidades/usuario';
import { UsuariosComponent } from '../usuarios/usuarios.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  statusLogin:boolean;

  loginUserName:string ="";
  
  constructor(route : ActivatedRoute) {
    console.log("añadiendo usuario")
    this.statusLogin=true;
    this.loginUserName = route.snapshot.params["loginUserName"]
   }


  
  ngOnInit(): void {
  }

  @Input() usuario : Usuario;

}
