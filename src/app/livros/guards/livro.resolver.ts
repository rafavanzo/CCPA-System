import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LivrosService } from '../services/livros.service';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroResolver implements Resolve<Livro> {

  constructor(private livrosService: LivrosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livro> {

    const id = route.params?.['idLivro'];
    if (id) {
      return this.livrosService.loadById(id);
    }

    return of({
      _idLivro: '',
      codigo: '',
      titulo: '',
      editora: '',
      dataLancamento: '',
      autor: '',
      genero: ''
    });
  }
}
