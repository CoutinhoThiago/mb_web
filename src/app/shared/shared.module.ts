import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SaldoTotalComponent } from '../components/saldo-total/saldo-total.component';
import { ContaComponent } from '../components/conta/conta.component';
import { ExpensesComponent } from '../components/sections/expenses/expenses.component';
import { IncomesComponent } from '../components/sections/incomes/incomes.component';
import { InvestmentsComponent } from '../components/sections/investments/investments.component';
import { CreditCardComponent } from '../components/sections/credit-card/credit-card.component';
import { TransactionModalComponent } from '../components/cadastro/transaction-modal/transaction-modal.component';
import { ContaModalComponent } from '../components/cadastro/conta-modal/conta-modal.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SaldoTotalComponent,
    ContaComponent,
    ExpensesComponent,
    IncomesComponent,
    InvestmentsComponent,
    CreditCardComponent,
    TransactionModalComponent,
    ContaModalComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    SaldoTotalComponent,
    ContaComponent,
    ExpensesComponent,
    IncomesComponent,
    InvestmentsComponent,
    CreditCardComponent,
    TransactionModalComponent,
    ContaModalComponent
  ],
})
export class SharedModule {}
