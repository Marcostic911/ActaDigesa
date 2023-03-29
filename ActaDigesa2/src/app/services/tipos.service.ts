import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tipo } from '../models/tipo';


@Injectable({
  providedIn: 'root'
})
export class TiposService {
 

  url = 'http://localhost:3000';

  tipos!: Tipo[];

  selectedTipos: Tipo = {
    nombre:''
  };

  constructor(private http: HttpClient) { }

  async tipoList(){
    try{
      const response = await this.http.get<Tipo[]>(this.url+'/tipo').toPromise();

      return response;

    }
    catch(e){
      console.log(e);
      return [];
    }
  }

  async tipoPost(newTipo: any){
    try{
      const paquete = {
      nombre: newTipo.nombre,
    }
    const response = await this.http.post(this.url+'/tipo', paquete).toPromise();

    return response;
    }
    catch(e){
      console.log(e);
      return[];
    }
  }

  async tipoDelete(toDelete: any) {
    try {
      await this.http
        .delete(this.url + '/tipo/delete/' + toDelete._id)
        .toPromise();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}

  
