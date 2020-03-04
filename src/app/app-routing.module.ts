import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilListComponent } from './components/perfil-list/perfil-list.component';
import { PerfilAddComponent } from './components/perfil-add/perfil-add.component';
import { DescartesListComponent } from './components/descartes-list/descartes-list.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { ContactosListComponent } from './components/contactos-list/contactos-list.component';


const routes: Routes = [
{
  path: '', 
  redirectTo: '/perfileslista', 
  pathMatch: 'full' },

  { 
    path: 'perfileslista', 
    component: PerfilListComponent 
  },
  { 
    path: 'perfilesadd', 
    component: PerfilAddComponent
  },
  {
    path: 'descarteslista',
    component: DescartesListComponent
  },
  {
    path: 'matchlista',
    component: MatchListComponent

  },
  {
    path: 'contactoslista',
    component: ContactosListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
