import { Injectable } from '@angular/core';
import { Aluno } from '../interfaces/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  students: Aluno[] = [];


  getStudents() : Aluno[]{
    return this.students
  }

  saveStudents(student:Aluno){
    student.id =this.students.length + 1;
    this.students.push(student);
  }
}
