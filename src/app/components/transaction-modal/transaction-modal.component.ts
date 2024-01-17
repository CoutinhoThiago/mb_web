import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { BancosService } from '../../services/bancos.service';
import { CategoriaService } from '../../services/categoria.service';
import { SubCategoriasService } from '../../services/subCategorias.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent implements OnInit {
  showModal = false;
  transaction = {
    bancoId: null,
    valor: null,
    data: this.getDataAtualFormatada(),
    categoriaId: null,
    subCategoriaId: null,
    descricao: ''
  };

  bancosComConta: any[] = [];
  categorias: any[] = [];
  subCategorias: any[] = [];
  token: string;

  constructor(
    private bancosService: BancosService,
    private categoriaService: CategoriaService,
    private subCategoriasService: SubCategoriasService
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.carregarBancosIndisponiveis();
    this.carregarCategorias();
  }

  carregarBancosIndisponiveis() {
    if (this.token) {
      this.bancosService.getBancos(this.token).subscribe(bancos => {
        this.bancosComConta = bancos.content.filter(banco => banco.ativo === false);
      });
    }
  }

  carregarCategorias() {
    if (this.token) {
      this.categoriaService.getCategorias(this.token).subscribe(categorias => {
        console.log('Categorias carregadas:', categorias.content);
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
        console.log('Subcategorias filtradas:', this.subCategorias);
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
    return !!this.transaction.valor && !!this.transaction.bancoId && !!this.transaction.descricao;
  }
}

