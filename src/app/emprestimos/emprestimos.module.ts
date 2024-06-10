import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimosRoutingModule } from './emprestimos-routing.module';
import { EmprestimosComponent } from './emprestimos/emprestimos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmprestimosComponent
  ],
  imports: [
    CommonModule,
    EmprestimosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmprestimosModule { }
