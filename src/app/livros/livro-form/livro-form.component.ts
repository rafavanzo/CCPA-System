import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { format, parse } from 'date-fns';

import { Livro } from '../model/livro';
import { LivrosService } from '../services/livros.service';
import { GENEROS } from './generos';


@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit {
  generos = GENEROS; // src\app\livros\livro-form\generos.ts

  form = this.formBuilder.group({
    _idLivro: [''],
    codigo: [''],
    titulo: [''],
    editora: [''],
    dataLancamento: [''],
    autor: [''],
    genero: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
              private service: LivrosService,
              private snackBar: MatSnackBar,
              private location: Location,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    const livro: Livro = this.route.snapshot.data['livro'];
    this.form.setValue({
      _idLivro: livro._idLivro,
      codigo: livro.codigo,
      titulo: livro.titulo,
      editora: livro.editora,
      dataLancamento: this.formatDate(livro.dataLancamento),
      autor: livro.autor,
      genero: livro.genero
    });
  }

  onSubmit(): void {
    this.service.save(this.form.value)
      .subscribe({
        next: result => this.onSuceess(),
        error: error => {
          this.onError();
        }
      });
  }

  onCancel(): void {
    this.location.back();
  }

  private formatDate(date: string): string {
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
    return format(parsedDate, 'yyyy-MM-dd');
  }

  private onSuceess() {
    this.snackBar.open('Livro salvo com sucesso!', 'X', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar livro.', 'X', { duration: 10000 });
  }

}
