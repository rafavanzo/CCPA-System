import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CCPA-System';
  userName: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userName = '';
    this.checkUsuarioLogado().then(userName => {
      this.userName = userName;
    });
  }

  ngOnInit(): void { }

  async checkUsuarioLogado(): Promise<string> {
    let usuario = '';
    try {
      usuario = await new Promise<string>((resolve) => {
        this.authService.checkSession().subscribe({
          next: result => {
            resolve(result);
          }
        });
      });
    } catch (error) {
      this.snackBar.open('Erro ao verificar sessão. Tente novamente.', 'X', { duration: 10000 });
    }

    return usuario;
  }

  isActive(route: string): boolean {
    return this.router.url !== '/login';
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.userName = '';
        this.router.navigate(['/login']);
        this.onLogout();
      },
      error: error => {
        this.snackBar.open('Erro ao fazer logout. Tente novamente.', 'X', { duration: 10000 });
      }
    });
  }

  onLogout() {
    this.snackBar.open('Logout efetuado com sucesso!', 'X', { duration: 5000 });
  }

  onClick(path: string) {
    this.router.navigate([`/${path.toLowerCase()}`]);
  }
}
