import { Component, OnInit } from '@angular/core';
import { UsuarioServicioService } from '.././usuario-servicio.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage{
  users : any =[];
  constructor(public usuarioServicioService: UsuarioServicioService ) {
  this.usuarioServicioService.getUsers()
    .subscribe(
      (data) => { 
        this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }
    
}
