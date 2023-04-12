import { Component } from '@angular/core';
import { Aluno } from 'src/app/interfaces/Aluno';
import { Curso } from 'src/app/interfaces/Curso';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  cursos: Curso[] = [
    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 1, name: "Python" },
  ];

  objAluno : Aluno = {} as Aluno;
  students : Aluno[] = [];

  saveStudent(){
      this.objAluno.id = this.students.length + 1;
      this.students.push(this.objAluno);
      this.objAluno = {} as Aluno;
      console.log(" Novo aluno cadastrado , total de alunos : " + this.students.length);
  }
}
