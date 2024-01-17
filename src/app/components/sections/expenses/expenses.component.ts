import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../../services/transacao.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})

export class ExpensesComponent implements OnInit {
  totalSaidas: number = 0;
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
        this.transacaoService.calcularTotalDespesas(); // Chame o método para calcular o total de despesas
        this.totalSaidas = this.transacaoService.totalDespesas; // Obtenha o total de despesas do serviço
      },
      error => console.error('Erro ao buscar transações', error)
    );
  }
}
