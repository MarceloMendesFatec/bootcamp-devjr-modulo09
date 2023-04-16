import { Component } from '@angular/core';
import { Aluno } from 'src/app/interfaces/Aluno';
import { Curso } from 'src/app/interfaces/Curso';
import { AlunosService } from 'src/app/services/alunos.service';
import { CursoService } from 'src/app/services/curso.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private CursoService: CursoService,
              private AlunoService: AlunosService ){}
  // a injecao de dependencias e feita atraves do construtor

  ngOnInit(): void {// servico sera inicializado aqui
    this.students = this.AlunoService.getStudents()
    this.CursoService.getcurso().subscribe(
      {
        next: data => {this.cursos = data}
      },
      // chama o servicoque retorna a lista de cursos
    );

  }


  cursos: Curso[] = [];
  objAluno : Aluno = {} as Aluno;
  students : Aluno[] = [];

  saveStudent(){
      this.AlunoService.saveStudents(this.objAluno)
      this.objAluno = {} as Aluno;
      console.log(" Novo aluno cadastrado , total de alunos : " + this.students.length);
  }
}
