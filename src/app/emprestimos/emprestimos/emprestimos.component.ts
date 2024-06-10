import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from '../../login/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmprestimosService } from '../services/emprestimos.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent {

  // emprestimos$: Observable<Emprestimo[]> | null = null;

  constructor(
    private emprestimosService: EmprestimosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    // this.checkSession();
  }

  // onAdd() {
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }

  // onEdit(emprestimo: Emprestimo) {
  //   this.router.navigate(['edit', emprestimo._idEmprestimo], {relativeTo: this.route});
  // }

  // onDelete(emprestimo: Emprestimo) {
    // const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //   data: 'Tem certeza que deseja remover esse curso?',
    // });

    // dialogRef.afterClosed().subscribe((result: boolean) => {
    //   if (result) {
    //     this.emprestimosService.remove(emprestimo._idEmprestimo)
    //       .subscribe({
    //         next: () => {
    //           this.loadEmprestimos();
    //           this.snackBar.open('Emprestimo removido com sucesso.', 'X', { duration: 5000, verticalPosition: 'top', horizontalPosition: 'center' });
    //         },
    //         error: () => {
    //           this.onError('Erro ao remover emprestimo.');
    //         }
    //       });
    //   }
    // });
  // }

  // checkSession(): void {
  //   this.authService.checkSession().subscribe({
  //     next: result => {
  //       console.log('teste:', result);
  //       this.loadEmprestimos();
  //     },
  //     error: error => {
  //       this.onError('Erro ao verificar sessão.');
  //       this.router.navigate(['/login']);
  //     }
  //   });
  // }

//   loadEmprestimos() {
//     // this.emprestimos$ = this.emprestimosService.list()
//     //   .pipe(
//     //     catchError(error => {
//     //       this.onError('Erro ao carregar emprestimos.');
//     //       return of([]);
//     //     })
//     //   )
//   }
}
