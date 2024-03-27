import { Livro } from './../model/livro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros: Livro[] = [
    { id_livro: 1,
      codigo: '22',
      titulo: 'Code Clean',
      editora: 'Alta Books',
      data_lancamento: '08/09/2009',
      autor: 'Robert C. Martin',
      genero: 'Estudo' }
  ];
  displayedColumns = [
    'id_livro',
    'codigo',
    'titulo',
    'editora',
    'data_lancamento',
    'autor',
    'genero'
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
