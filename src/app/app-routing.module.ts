import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
import { ActualizarPersonaComponent } from './components/actualizar-persona/actualizar-persona.component';



const routes: Routes = [
  { path: 'listar', component: ListarComponent},
  { path: 'registropersona', component: RegistroPersonaComponent},
  { path: 'home', component: HomeComponent},
  { path: 'actualizar', component: ActualizarPersonaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
