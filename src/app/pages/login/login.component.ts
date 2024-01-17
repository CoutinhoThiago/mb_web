import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  loginForm: FormGroup;
  showPassword: boolean = false;
  @ViewChild('senha') senhaInput: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  get dadosForm() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.loginService.login(this.dadosForm["login"].value, this.dadosForm["senha"].value).subscribe(
      response => {
        const token = response.token; // Extrai o token da resposta
        localStorage.setItem('token', token); // Armazena o token no localStorage
        // alert('Token armazenado com sucesso!' + '\r' + `Token: ${token}`);

        this.router.navigate(['/home']);
      },
      err => {
        alert('Ocorreu um erro');
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.senhaInput.nativeElement.type = this.showPassword ? 'text' : 'password';
  }
}
