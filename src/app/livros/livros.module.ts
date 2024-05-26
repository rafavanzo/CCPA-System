import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/LivrosComponent';



@NgModule({
    declarations: [
        LivrosComponent,
        LivroFormComponent
    ],
    imports: [
        CommonModule,
        LivrosRoutingModule,
        AppMaterialModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class LivrosModule { }
