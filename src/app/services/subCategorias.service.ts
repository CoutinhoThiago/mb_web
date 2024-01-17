import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriasService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment['endpoint'];

  getSubCategorias(token: string, id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const params = new HttpParams().set(
      'categoriaId', id.toString()
    );

    return this.http.get<any>(`${this.baseUrl}/subcategorias/listar`, { headers, params });
  }
}
