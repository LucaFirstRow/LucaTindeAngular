import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilService } from './services/perfil.service';
import { PerfilAddComponent } from './components/perfil-add/perfil-add.component';
import { PerfilListComponent } from './components/perfil-list/perfil-list.component';
import { DescartesListComponent } from './components/descartes-list/descartes-list.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { ContactosListComponent } from './components/contactos-list/contactos-list.component';


@NgModule({
  declarations: [
    AppComponent ,
    PerfilAddComponent,
    PerfilListComponent,
    DescartesListComponent,
    MatchListComponent,
    ContactosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
