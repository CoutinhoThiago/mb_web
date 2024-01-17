import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TransacoesComponent } from './transacoes.component';
import { TransacoesRoutingModule } from './transacoes-routing.module'; // Importe o TransacoesRoutingModule
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [],
  declarations: [
    TransacoesComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    TransacoesRoutingModule,
    SharedModule,
  ]
})
export class TransacoesModule { }
