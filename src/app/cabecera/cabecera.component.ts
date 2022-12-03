import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CABECERAComponent implements OnInit {
loginUserName:String;



constructor(route : ActivatedRoute) {
  this.loginUserName = route.snapshot.params["loginUserName"];
  console.log("login cabecera dento route: " + this.loginUserName);
 }

  ngOnInit(): void {
  }


}
