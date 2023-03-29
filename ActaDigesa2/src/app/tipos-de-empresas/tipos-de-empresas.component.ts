import { Component, OnInit } from '@angular/core';
import { TiposService } from '../services/tipos.service';



@Component({
  selector: 'app-tipos-de-empresas',
  templateUrl: './tipos-de-empresas.component.html',
  styleUrls: ['./tipos-de-empresas.component.css']
})
export class TiposDeEmpresasComponent implements OnInit {

  tipos: any = [];
  

  constructor(private tiposService: TiposService) { }

  async ngOnInit() {
    this.tipos = await this.tiposService.tipoList();
  }

  async tipoRecived(newTipo: any){
    const response = await this.tiposService.tipoPost(newTipo);
    return response;
  }

  async tipoToDelete(toDelete: any) {
    const tipoDeleted = await this.tiposService.tipoDelete(toDelete);

    console.log(tipoDeleted);
    return tipoDeleted;
  }

}
