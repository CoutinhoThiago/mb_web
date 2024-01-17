import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {
  totalBalance: number = 0;
  contas: any[] = [];

  constructor(private contaService: ContaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.contaService.listarContas().subscribe(
      (data: any) => {
        const contas = data.content;
        this.totalBalance = contas.reduce((acc, conta) => acc + conta.saldoAtual, 0);
        this.contas = contas;
      },
      (error) => {
        console.error('Erro ao buscar dados das contas', error);
      }
    );
  }
}
