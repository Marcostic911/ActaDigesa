import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpresaService } from '../../app/services/empresa.service';

@Component({
  selector: 'app-carga-datos',
  templateUrl: './carga-datos.component.html',
  styleUrls: ['./carga-datos.component.scss']
})
export class CargaDatosComponent implements OnInit {
  @Input() EmpresaService:any;

  datos = {
    puntajeMinimo: Number,
    obserComents: String,
  }
  empresas: any=[];

  @Input() TiposService: any;
  @Output() newEmpresa = new EventEmitter();
  @Input() AppRoutingModule: any;
  


  tipos: any=[];
  


  constructor(private empresaService: EmpresaService) { }

  async ngOnInit(): Promise<void>{
    this.empresas = await this.empresaService.getEmpresa();
  }

  sendDatosDeEmpresa(){
    //cargar los datos del formulario en la empresa
  }

}
