// conta.service.ts
import { environment } from '../../environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment["endpoint"]; // URL do seu endpoint de login

  listarContas(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/contas/listar`, { headers });
  }
}
