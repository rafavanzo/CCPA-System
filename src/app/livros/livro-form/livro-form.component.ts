import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
              private service: LivrosService,
              private snackBar: MatSnackBar,
              private location: Location
  ) {
    this.form = this.formBuilder.group({
      codigo: [''],
      titulo: [''],
      editora: [''],
      dataLancamento: [''],
      autor: [''],
      genero: ['']
    });
  }

  ngOnInit(): void {
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

  private onSuceess() {
    this.snackBar.open('Livro salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar livro.', 'Fechar', { duration: 5000 });
  }

}
