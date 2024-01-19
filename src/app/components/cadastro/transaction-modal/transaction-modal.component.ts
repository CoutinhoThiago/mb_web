import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ContaService } from '../../../services/conta.service';
import { CategoriaService } from '../../../services/categoria.service';
import { SubCategoriasService } from '../../../services/subCategorias.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent implements OnInit {
  showModal = false;
  transaction = {
    contaId: null,
    valor: null,
    data: this.getDataAtualFormatada(),
    categoriaId: null,
    subCategoriaId: null,
    descricao: ''
  };

  selectedConta: any; // Use o tipo apropriado
  contas: any[];
  categorias: any[] = [];
  subCategorias: any[] = [];
  token: string;

  constructor(
    private contaService: ContaService,
    private categoriaService: CategoriaService,
    private subCategoriasService: SubCategoriasService
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.carregarContas();
    this.carregarCategorias();
  }

  /* carregarBancosIndisponiveis() {
    if (this.token) {
      this.bancosService.getBancos(this.token).subscribe(bancos => {
        this.bancosComConta = bancos.content.filter(banco => banco.ativo === false);
      });
    }
  } */

  carregarContas() {
    if (this.token) {
      this.contaService.listarContas().subscribe(conta => {
        this.contas = conta.content;
      });
    }
  }

  carregarCategorias() {
    if (this.token) {
      this.categoriaService.getCategorias(this.token).subscribe(categorias => {
        this.categorias = categorias.content;
      });
    }
  }

  limparCategoria() {
    this.transaction.categoriaId = null;
    this.transaction.subCategoriaId = null;
    this.subCategorias = [];
  }

  limparSubCategoria() {
    this.transaction.subCategoriaId = null;
  }

  onCategoriaChange(event: Event) {
    this.subCategorias = [];
    const selectElement = event.target as HTMLSelectElement;
    this.transaction.categoriaId = selectElement.value;

    this.limparSubCategoria();
    this.carregarSubCategorias();
  }

  carregarSubCategorias() {
    if (this.token && this.transaction.categoriaId) {
      this.subCategoriasService.getSubCategorias(this.token, this.transaction.categoriaId).subscribe(subCategorias => {
        // Filtrar as subcategorias para incluir apenas aquelas que correspondem ao categoriaId da transação
        this.subCategorias = subCategorias.content.filter(subCategoria => subCategoria.categoriaId.toString() === this.transaction.categoriaId);
      });
    } else {
      this.subCategorias = [];
    }
  }

  getDataAtualFormatada(): string {
    const dataAtual = new Date();
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    return formatDate(dataAtual, format, locale);
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  onSubmit(): void {
    // Implemente a lógica de envio aqui
    this.toggleModal();
  }

  isFormValid(): boolean {
    return !!this.transaction.valor && !!this.transaction.contaId && !!this.transaction.descricao;
  }
}

