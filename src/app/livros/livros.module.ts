import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';



import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/LivrosComponent';
import { LivroFormComponent } from './livro-form/livro-form.component';



@NgModule({
    declarations: [
        LivrosComponent,
        LivroFormComponent
    ],
    imports: [
        CommonModule,
        LivrosRoutingModule,
        AppMaterialModule,
        MatCard,
        MatCardContent,
        MatToolbar,
        SharedModule,
        MatTableModule
    ]
})
export class LivrosModule { }
