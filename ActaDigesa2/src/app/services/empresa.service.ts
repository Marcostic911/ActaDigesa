import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TiposService } from './tipos.service';
import { Empresa } from "../models/empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = 'http://localhost:3000';

  empresas!: Empresa[];

  constructor(private http: HttpClient, tipoService: TiposService) { }

  async getEmpresa(){
    try{
      const response = await this.http.get(this.url+'/empresa').toPromise();

      return response;

    }
    catch(e){
      console.log(e);
      return [];
    }
  }

  async empresaPost(newEmpresa:any){
    try{
      const paquete = {
        nombre: newEmpresa.nombre,
        responsable: newEmpresa.responsable,
        tipo: newEmpresa.tipo,
      }
      const response = await this.http.post(this.url+'/empresa', paquete).toPromise();
      return response;
    }
    catch(e){
      console.log(e);
      return[];
    }
  }

  async empresaDelete(toDelete: any) {
    try {
      await this.http
        .delete(this.url + '/empresa/delete/' + toDelete._id)
        .toPromise();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
