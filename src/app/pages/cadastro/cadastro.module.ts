import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [],
  declarations: [
    CadastroComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    CadastroRoutingModule,
    SharedModule,
  ]
})
export class CadastroModule { }
