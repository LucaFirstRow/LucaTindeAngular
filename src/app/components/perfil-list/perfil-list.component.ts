import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {
   title ='RestPrueba';
  perfiles : Perfil[] =[];  //Perfil[];
  
  constructor(protected perfilService : PerfilService) { 


  }

  ngOnInit()  {
           
    this.perfilService.getPerfiles().subscribe(
      (data) => { // Success
        console.log(data);
        this.perfiles = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
}
}
    /*this.perfilService.getPerfiles().subscribe(
      
      perfiles => this.perfiles =perfiles
       );    
      }*/

    
 