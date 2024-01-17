import { environment } from '../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment["endpoint"]; // URL do seu endpoint de login


  login(login: string, senha: string) {
    const credentials =
    {
      login: login,
      senha: senha
    };

    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }
}
