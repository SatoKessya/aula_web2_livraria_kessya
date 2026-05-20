import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { AutoresRepository } from './autores.repository';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService, AutoresRepository],
  exports: [],
})
export class AutoresModule {}
