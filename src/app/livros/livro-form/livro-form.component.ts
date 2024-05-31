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
              private snackBar: MatSnackBar
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
        next: result => console.log(result),
        error: error => {
          console.error(error);
          this.onError();
        }
      });
  }

  onCancel(): void {
    this.form.reset();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar livro.', 'Fechar', { duration: 5000 });
  }

}
