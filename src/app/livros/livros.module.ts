import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';


@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    MatTableModule
  ]
})
export class LivrosModule { }
