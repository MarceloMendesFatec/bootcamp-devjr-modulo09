import { Curso,  } from "./Curso";


export interface Aluno
{
  id: number;
  nome: string;
  email: string;
  telefone: string;
  curso: Curso;
  turno: string;
}
