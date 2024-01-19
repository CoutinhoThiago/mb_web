// src/app/sidebar/sidebar.component.ts
import { TransactionModalComponent } from '../cadastro/transaction-modal/transaction-modal.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild(TransactionModalComponent, { static: false }) transactionModal: TransactionModalComponent;

  openTransactionModal(): void {
    console.log("teste");
    this.transactionModal.toggleModal();
  }
}
