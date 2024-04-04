import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule
  ]
})
export class LivrosModule { }
