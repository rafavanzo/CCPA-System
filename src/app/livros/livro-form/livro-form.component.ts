import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: LivrosService,
              private snackBar: MatSnackBar,
              private location: Location
  ) {
    this.form = this.formBuilder.group({
      codigo: [null],
      titulo: [null],
      editora: [null],
      dataLancamento: [null],
      autor: [null],
      genero: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.save(this.form.value)
      .subscribe({
        next: result => this.onSuceess(),
        error: error => {
          console.error(error);
          this.onError();
        }
      });
  }

  onCancel(): void {
    this.location.back();
  }

  private onSuceess() {
    this.snackBar.open('Livro salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar livro.', 'Fechar', { duration: 5000 });
  }

}
