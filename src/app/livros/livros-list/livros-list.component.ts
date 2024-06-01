import { Component, Input } from '@angular/core';

import { Livro } from '../model/livro';
import { LivrosService } from '../services/livros.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrl: './livros-list.component.scss'
})
export class LivrosListComponent {

    @Input() livros: Livro[] = [];
    readonly displayedColumns = [
        // '_idLivro',
        'codigo',
        'titulo',
        'editora',
        'dataLancamento',
        'autor',
        'genero',
        'actions'
    ];

    constructor(private livrosService: LivrosService,
      public dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
    }
}
