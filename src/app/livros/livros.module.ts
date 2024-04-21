import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/LivrosComponent';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";



@NgModule({
    declarations: [
        LivrosComponent
    ],
    imports: [
        CommonModule,
        LivrosRoutingModule,
        AppMaterialModule,
        MatCard,
        MatCardContent,
        MatToolbar
    ]
})
export class LivrosModule { }
