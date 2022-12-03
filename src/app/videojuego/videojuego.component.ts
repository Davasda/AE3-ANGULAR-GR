import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../entidades/videojuego';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {

  idVideojuego: number = 0;
  titulo : string ="";
  compania : string="";
  valoracion : number=0;
  imageUrl: string= "";

  constructor(route : ActivatedRoute) {
    console.log("Creando el videojuego")
    console.log('titulo: ${this.titulo}')

    this.imageUrl = route.snapshot.params["imageUrl"]
    this.idVideojuego = route.snapshot.params["idVideojuego"]
    this.titulo = route.snapshot.params["titulo"]
    this.compania = route.snapshot.params["compania"]
    this.valoracion = route.snapshot.params["valoracion"]
   }

  ngOnInit(): void {
  }

  @Input() videojuego : Videojuego;

}
