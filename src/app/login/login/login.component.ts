import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm = this.formBuilder.group({
    usuario: [''],
    password: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private loginService: LoginService
  ) { }

  ngOnInit(): void {

  }

  onLogin(): void {
    const formData = this.loginForm.value;
    const loginData = this.extractLoginData(formData);
    // console.log(loginData);

    if (loginData.usu && loginData.senha) {
      this.loginService.login(loginData.usu, loginData.senha)
        .subscribe({
          next: result => {
            console.log('teste:', result);
            this.onSuccess();
          },
          error: error => {
            console.log(error);
            this.onError();
          }
        });
    } else {
      this.snackBar.open('Usuário e senha são obrigatórios.', 'X', { duration: 5000 });
    }
  }

  onSuccess() {
    this.snackBar.open('Login efetuado com sucesso!', 'X', { duration: 5000 });
    this.router.navigate(['/livros']);
  }

  onError() {
    this.snackBar.open('Erro ao fazer login. Tente novamente.', 'X', { duration: 10000 });
  }

  extractLoginData(formData: any): { usu: string, senha: string } {
    return {
      usu: formData.usuario,
      senha: formData.password
    };
  }
}
