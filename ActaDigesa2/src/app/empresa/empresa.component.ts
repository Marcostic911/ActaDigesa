import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { TiposService } from "../services/tipos.service";

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  empresas: any = [];

  constructor(private empresaService: EmpresaService, tiposService: TiposService) { }
  
  async ngOnInit() {
    this.empresas = await this.empresaService.getEmpresa();
  }

  async empresaRecived(newEmpresa: any){
    const response = await this.empresaService.empresaPost(newEmpresa);
    return response;
  }

  async empresaToDelete(toDelete: any) {
    const empresaDeleted = await this.empresaService.empresaDelete(toDelete);

    console.log(empresaDeleted);
    return empresaDeleted;
  }
}
