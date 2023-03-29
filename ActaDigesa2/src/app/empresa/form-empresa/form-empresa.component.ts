import { Component, OnInit , Output , Input , EventEmitter} from '@angular/core';
import { ListTiposComponent } from '../../tipos-de-empresas/list-tipos/list-tipos.component';
import { TiposService } from '../../services/tipos.service';
import { ListEmpresasComponent } from '../../empresa/list-empresas/list-empresas.component';
import { EmpresaService } from '../../services/empresa.service';



@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})
export class FormEmpresaComponent implements OnInit {

   
  @Input() EmpresaService: any;
  @Input() TiposService: any;
  @Output() newEmpresa = new EventEmitter();
  @Input() AppRoutingModule: any;
  
  empresa = {
    nombre:"",
    responsable:"",
    tipo: ListTiposComponent
  }

  tipos: any=[];
  empresas!: any;
  

  constructor(private tiposService: TiposService, empresaService: EmpresaService ) { }

  async ngOnInit() {
    this.tipos = await this.tiposService.tipoList();
    
   
  }

  sendEmpresa(){
    this.newEmpresa.emit(this.empresa)
  }



}
