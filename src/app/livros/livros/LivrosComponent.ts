import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { LivrosService } from '../services/livros.service';
import { Livro } from './../model/livro';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros: Observable<Livro[]>;
  displayedColumns = [
    'id_livro',
    'codigo',
    'titulo',
    'editora',
    'data_lancamento',
    'autor',
    'genero'
  ];

  constructor(
    private livrosService: LivrosService,
    public dialog: MatDialog
  ) {
    this.livros = this.livrosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar livros.');
        return of([]);
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
