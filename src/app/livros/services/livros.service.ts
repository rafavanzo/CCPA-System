import { Injectable } from '@angular/core';

import { Livro } from '../model/livro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private httpClient: HttpClient) { }

  list(): Livro[] {
    return [
      { id_livro: 1,
        codigo: '22',
        titulo: 'Code Clean',
        editora: 'Alta Books',
        data_lancamento: '08/09/2009',
        autor: 'Robert C. Martin',
        genero: 'Estudo' }
    ];
  }
}
