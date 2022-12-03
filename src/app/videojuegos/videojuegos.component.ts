import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Videojuego } from '../entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {



  ngOnInit(): void {
  }

  
//Creamos el array listaVideojuegos que almacena la lista de todos los videojuegos
  listaVideojuegos :Videojuego[] = []
  videojuego : Videojuego | null = null

//Inicializamos atributos
_idVideojuego: number = 0;
 titulo : string ="";
 compania : string="";
 valoracion : number=0;
 imageUrl: string= "";


  //Creamos un listado de Videojuegos y los añadimos al array.
  constructor(){
    let videojuego:Videojuego = new Videojuego("./assets/images/Tomb_Raider_Underworld_capa.png", "Tom Raider", "Namco", 4 )
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego ("./assets/images/mario_bros.png","Mario Bros", "Nintendo", 3)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("./assets/images/rush.png", "Rush Blood", "Sony", 5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("./assets/images/sonic.jpg", "Sonic", "Sega", 3)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("./assets/images/alone_in_the_dark.png", "Alone in the Dark", "Infograme", 5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("./assets/images/pacman.jpg", "Pac-Man", "Bandai", 4)
    this.listaVideojuegos.push(videojuego)
}

/*Método para que al selecionar uno de la lista vaya al detalle*/
public seleccionar(videojuego : Videojuego) : void{
  console.log("Seleccionando...")
  this._idVideojuego = videojuego.idVideojuego
  this.titulo = videojuego.titulo
  this.compania = videojuego.compania
  this.valoracion = videojuego.valoracion
  this.imageUrl = videojuego.imageUrl
}

}
