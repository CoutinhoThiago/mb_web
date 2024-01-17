import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../../services/transacao.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {
  totalEntradas: number = 0;
  transacoes: any[] = [];
  token: string | null = null;

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.fetchTransacoes();
    }
  }

  fetchTransacoes() {
    this.transacaoService.getTransacoes(this.token!).subscribe(
      data => {
        this.transacoes = data.content;
        this.transacaoService.transacoes = this.transacoes; // Defina as transações no serviço
        this.transacaoService.calcularTotalEntradas(); // Chame o método para calcular o total de entradas
        this.totalEntradas = this.transacaoService.totalEntradas; // Obtenha o total de entradas do serviço
      },
      error => console.error('Erro ao buscar transações', error)
    );
  }
}
