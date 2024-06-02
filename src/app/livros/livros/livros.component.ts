import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { LivrosService } from '../services/livros.service';
import { Livro } from './../model/livro';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros$: Observable<Livro[]> | null = null;

  constructor(
    private livrosService: LivrosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.loadLivros();
  }

  loadLivros() {
    this.livros$ = this.livrosService.list()
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

  onEdit(livro: Livro) {
    this.router.navigate(['edit', livro._idLivro], {relativeTo: this.route});
  }

  onDelete(livro: Livro) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.livrosService.remove(livro._idLivro)
          .subscribe({
            next: () => {
              this.loadLivros();
              this.snackBar.open('Livro removido com sucesso.', 'X', { duration: 5000, verticalPosition: 'top', horizontalPosition: 'center' });
            },
            error: () => {
              this.onError('Erro ao remover livro.');
            }
          });
      }
    });
  }
}
