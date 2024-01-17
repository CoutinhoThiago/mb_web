import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class BancosService {
  bancos: any[] = [];

  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment["endpoint"]; // URL do seu endpoint

  getBancos(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.baseUrl}/bancos`, { headers });
  }

  // Aqui você pode adicionar mais métodos conforme a necessidade,
  // por exemplo, métodos para criar, atualizar ou excluir bancos.
}
