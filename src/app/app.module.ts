import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPersonaComponent } from './components/actualizar-persona/actualizar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    MenuComponent,
    RegistroPersonaComponent,
    ActualizarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
