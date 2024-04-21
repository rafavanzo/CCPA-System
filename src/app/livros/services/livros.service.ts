import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = '/assets/livros.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      tap(livros => console.log(livros))
    );
  }
}
