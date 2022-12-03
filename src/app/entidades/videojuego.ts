export class Videojuego{

//Generamos los atributos
private _idVideojuego: number = 0;
public titulo : string;
public compania : string;
public valoracion : number;
public imageUrl :string;

//Generamos el contador para el idVideojuego
private static contadorId: number =1;

constructor ( imageUrl : string, titulo : string,  compania : string,  valoracion : number ){
    this._idVideojuego = Videojuego.contadorId++;
    this.titulo = titulo;
    this.compania = compania;
    this.valoracion = valoracion; 
    this.imageUrl = imageUrl;
}
public get idVideojuego(): number {
    return this._idVideojuego;
}



}