import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent {
  @Input() nome: string;
  @Input() saldo: number;
  @Input() agencia: string;
  @Input() numeroConta: string;
}
