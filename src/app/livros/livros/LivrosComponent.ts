import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { LivrosService } from '../services/livros.service';
import { Livro } from './../model/livro';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros: Observable<Livro[]>;
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

  constructor(
    private livrosService: LivrosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
