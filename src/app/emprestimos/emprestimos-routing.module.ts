import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprestimosComponent } from './emprestimos/emprestimos.component';

const routes: Routes = [
  { path: '', component: EmprestimosComponent },
  // { path: 'new', component: LivroFormComponent, resolve: { livro: LivroResolver }},
  // { path: 'edit/:idEmprestimo', component: LivroFormComponent, resolve: { livro: LivroResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimosRoutingModule { }
