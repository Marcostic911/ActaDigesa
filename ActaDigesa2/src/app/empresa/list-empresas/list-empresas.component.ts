import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TiposService } from "../../services/tipos.service";
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.scss']
})
export class ListEmpresasComponent implements OnInit {


  @Input() TiposService: any;

  @Input() empresas :any = [];
  @Output() toDelete = new EventEmitter();

  constructor(private empresaService: EmpresaService, tiposService: TiposService) {

  }


  ngOnInit(): void {
  }

  delete(empresa: { nombre: string; }) {
    if (empresa.nombre == '') {
      alert('La empresa no existe.');
    }
    this.toDelete.emit(empresa);



  }

  edit(empresa: any){
  }
}
