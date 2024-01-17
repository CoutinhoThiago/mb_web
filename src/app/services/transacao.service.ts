import { environment } from '../../environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  transacoes: any[] = [];

  totalDespesas: number;
  totalEntradas: number;

  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment["endpoint"]; // URL do seu endpoint de login

  getTransacoes(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.baseUrl}/transacoes/listar`, { headers });
  }

  calcularTotalDespesas() {
    this.totalDespesas = this.transacoes
      .filter(transacao => transacao.tipo === 'SAIDA') // Supondo que 'despesa' seja o tipo correto
      .reduce((total, transacao) => total + transacao.valor, 0);
  }

  calcularTotalEntradas() {
    this.totalEntradas = this.transacoes
      .filter(transacao => transacao.tipo === 'ENTRADA') // Supondo que 'entrada' seja o tipo correto
      .reduce((total, transacao) => total + transacao.valor, 0);
  }
}
