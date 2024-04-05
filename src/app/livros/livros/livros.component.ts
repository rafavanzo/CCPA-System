import { Component } from '@angular/core';

import { LivrosService } from '../services/livros.service';
import { Livro } from './../model/livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros: Livro[] = [];
  displayedColumns = [
    'id_livro',
    'codigo',
    'titulo',
    'editora',
    'data_lancamento',
    'autor',
    'genero'
  ];

  // livrosService: LivrosService;

  constructor(private livrosService: LivrosService) {
    // this.livrosService = new LivrosService();
    this.livros = this.livrosService.list();
  }

  ngOnInit(): void {

  }

}
