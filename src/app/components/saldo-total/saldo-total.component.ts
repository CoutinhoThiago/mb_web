import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saldo-total',
  templateUrl: './saldo-total.component.html',
  styleUrls: ['./saldo-total.component.scss']
})
export class SaldoTotalComponent {
  @Input() totalBalance: number = 0;
}
