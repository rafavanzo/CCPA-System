import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './livros/LivrosComponent';

const routes: Routes = [
  { path: '', component: LivrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
