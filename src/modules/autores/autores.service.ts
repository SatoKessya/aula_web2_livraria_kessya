import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';
import { NotFoundError } from 'rxjs';

let autores = [
  {
    id: 1,
    nome: 'Hera Silveira',
    email: 'Hera.Ramos@gmail.com',
  },

  {
    id: 2,
    nome: 'Ana Paula',
    email: 'Ana.Paula@gmail.com',
  },
  {
    id: 3,
    nome: 'Paulo Henrique',
    email: 'Paulo.Henrique@gmail.com',
  },
  {
    id: 4,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  listarAutores() {
    if (!autores) {
      return 'Não há autores cadastrados';
    }
    return autores;
  }

  listarAutor(id: number) {
    const autor = autores.find((autor) => autor.id === id);

    if (!autor) {
        throw new NotFoundException('Autor não encontrado.');
    }
    return autor;
   
  }

  criarAutor(body: CriarAutorDto) {
    if (!body.nome || !body.email) {
      return 'Nome e email são obrigatórios.';
    }
    autores.push({
      id: autores.length + 1,
      nome: body.nome,
      email: body.email,
    });

    return autores;
  }

  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    const autorEncontrado = this.listarAutor(idAutor);

    if (!bodyRequest.nome && !bodyRequest.email) {
      throw new BadRequestException('Nome e email são obrigatorios!');
    }
 
    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }

    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }

    return autorEncontrado;
  }
}
