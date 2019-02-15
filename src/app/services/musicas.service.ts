import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musica} from '../models/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

   getListaMusicas(): Observable<Musica[]> {
    const url = this.apiUrl + 'musicas';
    return this.http.get<Musica[]>(url);
  }
}
