import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas.component';
import { SharedModule } from '../../shared/shared.module';
import { ContaService } from '../../services/conta.service';

@NgModule({
  providers: [ContaService],
  declarations: [
    ContasComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    ContasRoutingModule,
    SharedModule,
  ]
})
export class ContasModule { }
