export interface Usuario {
  idUsuario: number;
  nome: string;
  email: string;
  usuario: string;
  password: string;
  permissao: 'admin' | 'admin_menor' | 'aluno';
  dataNascimento: string;
  telefone: string;
  ativo: boolean;
}
