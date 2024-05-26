import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.form.value);
  }

  onCancel(): void {
    this.form.reset();
  }

}
