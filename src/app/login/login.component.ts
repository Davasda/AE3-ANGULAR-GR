import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Atributos login
  
  username:string = "";
  password:string = "";

  
  constructor(private router:Router) {

  }


  public envionLogin (): void{
    console.log("enviando datos a usuario")
      this.router.navigate(['/usuarios',this.username, this.password])
  }

  ngOnInit(): void {
  }

}
