import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui

import { BancosService } from '../app/services/bancos.service';


import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    BancosService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
