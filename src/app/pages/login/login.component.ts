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
    this.router.navigate(['/home']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.senhaInput.nativeElement.type = this.showPassword ? 'text' : 'password';
  }
}
