import { Component, OnInit, Input } from '@angular/core';
import { ContaService } from '../../../services/conta.service';
import { BancosService } from '../../../services/bancos.service';

@Component({
  selector: 'app-conta-modal',
  templateUrl: './conta-modal.component.html',
  styleUrls: ['./conta-modal.component.scss']
})
export class ContaModalComponent implements OnInit {
  showModal = false;
  contas: any[]; // Armazena a lista de contas (se necessário)
  bancos: any[] = []; // Armazena a lista de bancos disponíveis
  token: string;

  // Propriedades do formulário
  bancoSelecionado: number; // Armazena o ID do banco selecionado
  agencia: string; // Armazena a agência digitada
  numeroConta: string; // Armazena o número da conta digitado
  saldoInicial: number; // Armazena o saldo inicial digitado

  constructor(
    private bancosService: BancosService,
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.carregarBancosDisponiveis();
  }

  carregarBancosDisponiveis() {
    if (this.token) {
      this.bancosService.getBancos(this.token).subscribe(bancos => {
        this.bancos = bancos.content.filter(banco => banco.ativo === true);
      });
    }
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  isFormValid(): boolean {
    // Implemente a lógica de validação do formulário aqui
    return this.bancoSelecionado && this.agencia && this.numeroConta && this.saldoInicial >= 0;
  }
}
