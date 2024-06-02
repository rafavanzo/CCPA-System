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
        livros.forEach(livro => this.formatDate(livro));
        // console.log(livros);
      })
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Livro>(`${this.API}/${id}`);
  }

  save(record: Partial<Livro>) {
    return record._idLivro ? this.update(record) : this.create(record);
  }

  private formatDate(livro: Livro) {
    let data = moment(livro.dataLancamento, 'DD/MM/YYYY');
    livro.dataLancamento = data.isValid() ? data.format('DD/MM/YYYY') : 'Data Inválida';
  }

  private create(record: Partial<Livro>) {
    return this.httpClient.post<Livro>(this.API, record).pipe(first());
  }

  private update(record: Partial<Livro>) {
    return this.httpClient.put<Livro>(`${this.API}/${record._idLivro}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
