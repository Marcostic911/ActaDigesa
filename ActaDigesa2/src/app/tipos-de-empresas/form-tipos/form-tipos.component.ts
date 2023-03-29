import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'app-form-tipos',
  templateUrl: './form-tipos.component.html',
  styleUrls: ['./form-tipos.component.scss']
})
export class FormTiposComponent implements OnInit {


  
  @Output() newTipo = new EventEmitter();

  tipo = {
    nombre: '',
  } 

 

  constructor(private TiposService: TiposService) { }

  ngOnInit(): void {
  }

  sendTipo(){
    this.newTipo.emit(this.tipo);

    console.log(this.tipo);
  }


}
