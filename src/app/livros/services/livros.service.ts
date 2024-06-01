import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import moment from 'moment';

import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = '/api/livros';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(livros => {
        livros.forEach(livro => this.formatData(livro));
        console.log(livros);
      })
    );
  }

  formatData(livro: Livro) {
    let data = moment(livro.dataLancamento, 'DD/MM/YYYY');
    if (data.isValid()) {
      livro.dataLancamento = data.format('DD/MM/YYYY');
    } else {
      console.error(`Invalid date: ${livro.dataLancamento}`);
    }
  }

  save(record: Livro) {
    return this.httpClient.post<Livro>(this.API, record)
  }
}
