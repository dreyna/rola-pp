import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AadRolComponent } from './components/roles/aad-rol/aad-rol.component';
import { ListarRolComponent } from './components/roles/listar-rol/listar-rol.component';
import { UpdateRolComponent } from './components/roles/update-rol/update-rol.component';

const ROUTES: Routes = [
  { path: 'listar', component: ListarRolComponent},
  { path: "rol/add", component: AadRolComponent },
  { path: "editar/:id", component: UpdateRolComponent }
  /*
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }*/
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
