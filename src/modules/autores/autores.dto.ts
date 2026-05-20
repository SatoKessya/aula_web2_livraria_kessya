export class CriarAutorDto {
  nome: string;
  email: string;
}

export class AtualizarAutorDto {
  nome?: string;
  email?: string;
}