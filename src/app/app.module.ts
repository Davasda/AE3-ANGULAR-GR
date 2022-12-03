import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CABECERAComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { InsertarVideojuegoComponent } from './insertar-videojuego/insertar-videojuego.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CABECERAComponent,
    PieComponent,
    LoginComponent,
    InsertarVideojuegoComponent,
    VideojuegosComponent,
    VideojuegoComponent,
    NosotrosComponent,
    InicioComponent,
    ContactoComponent,
    UsuariosComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
