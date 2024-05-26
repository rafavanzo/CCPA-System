import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LivrosService } from '../services/livros.service';
import { Livro } from './../model/livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros$: Observable<Livro[]>;

  displayedColumns = [
    '_idLivro',
    'codigo',
    'titulo',
    'editora',
    'dataLancamento',
    'autor',
    'genero',
    'actions'
  ];

  constructor(private livrosService: LivrosService) {
    this.livros$ = this.livrosService.list();
  }

  ngOnInit(): void {
  }

}
