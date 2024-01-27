import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    //private cadastroService: CadastroService
  ) {}

  cadastroForm: FormGroup;
  showPassword: boolean = false;
  @ViewChild('senha') senhaInput: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      cadastro: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  get dadosForm() {
    return this.cadastroForm.controls;
  }


}
