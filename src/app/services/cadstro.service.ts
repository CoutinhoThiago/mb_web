import { environment } from '../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment["endpoint"];



}
