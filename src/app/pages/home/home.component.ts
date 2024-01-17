import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  balance: number = 0;
  transactions: any[] = [];
  creditCardInfo: any;

  constructor(private contaService: ContaService) {} // Correção: Adicione ')' aqui

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.contaService.listarContas().subscribe(data => {
      const contas = data.content;
      this.balance = contas.reduce((acc, conta) => acc + conta.saldoAtual, 0);
      // ... mais lógica se necessário
    }, error => {
      console.error('Erro ao buscar dados das contas', error);
    });

    // Simulação de dados de transações e informações do cartão de crédito
    this.transactions = [
      { description: 'Supermercado', amount: -150.50 },
      { description: 'Salário', amount: 3000.00 }
      // ... outras transações
    ];

    this.creditCardInfo = {
      cardType: 'Visa',
      lastFourDigits: '1234',
      dueAmount: 1788.00
      // ... mais detalhes do cartão de crédito
    };
  }
}
