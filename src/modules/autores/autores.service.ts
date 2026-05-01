import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';
import { autoresTabela } from 'src/db/schemas';

@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    }
    return autorEncontrado;
  }

  async criarAutor(bodyRequest: CriarAutorDto) {
    return await this.autoresRepository.criarAutor(bodyRequest);
  } 

  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }
    
  deletarAutor(idAutor: number) {}
}
