import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from 'src/app/interfaces/Aluno';
import { Curso } from 'src/app/interfaces/Curso';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input()// input vem do pai
  cursos: Curso[] = [];

  @Input() // input vem do pai
  objAluno ?: Aluno

  @Output() // do filho  vai para o pai
  saveEmitter = new EventEmitter();

    save(): void{
      this.saveEmitter.emit();  //  aqui o aluno estara pronto para ser salvo no array , ou no banco de dados
    }


}
