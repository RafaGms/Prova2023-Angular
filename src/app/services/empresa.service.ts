import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../components/empresa/empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string = 'http://localhost:8080/empresas';

  constructor(private http: HttpClient) { }

  getEmpresa(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.url);
  }

  saveEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url, empresa);
  }

  removeEmpresa(empresa: Empresa): Observable<void> {
    return this.http.delete<void>(`${this.url}/${empresa.id}`);
  }

}
