import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  private readonly API = '/api/emprestimos';

  constructor(private httpClient: HttpClient) { }

  list() {
    // return this.httpClient.get<Emprestimo[]>(this.API)
    // .pipe(
    //   first(),
    //   delay(1000),
    //   tap(emprestimos => {
    //     emprestimos.forEach(emprestimo => this.formatDate(emprestimo));
    //     // console.log(emprestimos);
    //   })
    // );
  }

  loadById(id: string) {
    // return this.httpClient.get<Emprestimo>(`${this.API}/${id}`);
  }

  // save(record: Partial<Emprestimo>) {
  //   // return record._idEmprestimo ? this.update(record) : this.create(record);
  // }

  // private formatDate(emprestimo: Emprestimo) {
  //   let dataEmp = moment(emprestimo.dataEmprestimo, 'DD/MM/YYYY');
  //   emprestimo.dataEmprestimo = dataEmp.isValid() ? dataEmp.format('DD/MM/YYYY') : 'Data Inválida';
  //   let dataDev = moment(emprestimo.dataDevReal, 'DD/MM/YYYY');
  //   emprestimo.dataDevReal = dataDev.isValid() ? dataDev.format('DD/MM/YYYY') : 'Data Inválida';
  //   let dataPrev = moment(emprestimo.dataPrevDev, 'DD/MM/YYYY');
  //   emprestimo.dataPrevDev = dataPrev.isValid() ? dataPrev.format('DD/MM/YYYY') : 'Data Inválida';
  // }

  // private create(record: Partial<Emprestimo>) {
  //   // return this.httpClient.post<Emprestimo>(this.API, record).pipe(first());
  // }

  // private update(record: Partial<Emprestimo>) {
  //   // return this.httpClient.put<Emprestimo>(`${this.API}/${record._idEmprestimo}`, record).pipe(first());
  // }

  remove(id: string) {
    // return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
