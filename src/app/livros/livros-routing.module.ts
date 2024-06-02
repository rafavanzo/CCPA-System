import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './livros/livros.component';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroResolver } from './guards/livro.resolver';

const routes: Routes = [
  { path: '', component: LivrosComponent },
  { path: 'new', component: LivroFormComponent, resolve: { livro: LivroResolver }},
  { path: 'edit/:idLivro', component: LivroFormComponent, resolve: { livro: LivroResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
