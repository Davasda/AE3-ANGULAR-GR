import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { UsuariosComponent } from '../usuarios/usuarios.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  statusLogin = false


  constructor() { 

  }


  
  ngOnInit(): void {
  }

  @Input() usuario : Usuario;

}
