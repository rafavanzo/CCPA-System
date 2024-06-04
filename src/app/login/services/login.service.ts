import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = '/api/usuarios';

  constructor(private HttpClient: HttpClient) { }

  login(usu: string, senha: string) {
    return this.HttpClient.post(`${this.API}/login`, {usu, senha});
  }
}
