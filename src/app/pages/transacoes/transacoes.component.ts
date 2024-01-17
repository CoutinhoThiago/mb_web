import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  transacoes: any[] = [];
  token: string;

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.fetchTransacoes();
  }

  fetchTransacoes() {
    if (this.token) {
      this.transacaoService.getTransacoes(this.token).subscribe(
        data => {
          this.transacoes = data.content;
        },
        error => console.error('Erro ao buscar transações', error)
      );
    }
  }

  splitDateTime(dateTimeString: string): { date: string, time: string } {
    let parts = dateTimeString.split('T');
    return { date: parts[0], time: parts[1] };
  }

  getIcon(tipo: string): string {
    return tipo === 'ENTRADA' ? 'arrow_upward' : 'arrow_downward';
  }

  getIconColor(tipo: string): string {
    return tipo === 'ENTRADA' ? 'green' : 'red';
  }

  getAmountColor(tipo: string): string {
    return tipo === 'ENTRADA' ? 'green' : 'red';
  }
}
