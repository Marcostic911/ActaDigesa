import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TiposService } from 'src/app/services/tipos.service';


@Component({
  selector: 'app-list-tipos',
  templateUrl: './list-tipos.component.html',
  styleUrls: ['./list-tipos.component.scss']
})
export class ListTiposComponent implements OnInit, OnChanges {

  @Input() tipos :any = [];
  @Output() toDelete = new EventEmitter();
  @Input() tipo :any = [];

  constructor(private TiposService : TiposService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['tipos'] != null &&
      changes['tipos'].currentValue['length'] > 0
    ) {
      console.log(changes['tipos'].currentValue);
    }
  }

  ngOnInit(): void {
  }

  delete(tipo: { nombre: string; }) {
    if (tipo.nombre == '') {
      alert('El tipo de empresa no existe.');
    }
    this.toDelete.emit(tipo);
    return
  }

  edit(tipo: any){

  }
}
