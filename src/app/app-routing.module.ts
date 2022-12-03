import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { Usuario } from './entidades/usuario';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

/*Creamos la rutas para navegar entre los componentes*/
const routes: Routes = [
  { path : '',  component : InicioComponent},
  { path : 'inicio',  component : InicioComponent},
  { path : 'login',  component : UsuariosComponent},
  { path : 'videojuegos',  component : VideojuegosComponent},
  { path : 'nosotros',  component : NosotrosComponent},
  { path : 'contacto',  component : ContactoComponent},
  /*En esta ruta es la que pasamos de Videojuegos a videojuego proporcionando los datos del Videojuego*/
  { path : 'videojuego/:imageUrl/:idVideojuego/:titulo/:compania/:valoracion',  component : VideojuegoComponent},
  /*En esta ruta enviamos desde el formulario el usuario y la password para que compruebe si existe*/
  { path : 'usuarios/:username/:password',  component : UsuariosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
