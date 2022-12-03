import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { Usuario } from './entidades/usuario';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [
  { path : '',  component : InicioComponent},
  { path : 'inicio',  component : InicioComponent},
  { path : 'login',  component : UsuariosComponent},
  { path : 'videojuegos',  component : VideojuegosComponent},
  { path : 'nosotros',  component : NosotrosComponent},
  { path : 'contacto',  component : ContactoComponent},
  { path : 'videojuego/:imageUrl/:idVideojuego/:titulo/:compania/:valoracion',  component : VideojuegoComponent},
  { path : 'usuarios/:username/:password',  component : UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
