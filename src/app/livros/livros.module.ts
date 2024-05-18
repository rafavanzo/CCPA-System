import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatToolbar } from '@angular/material/toolbar';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/LivrosComponent';



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
        MatToolbar,
        SharedModule,
        MatProgressSpinner
    ]
})
export class LivrosModule { }
