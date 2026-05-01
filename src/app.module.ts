import { Module } from '@nestjs/common';
import { AutoresModule } from './modules/autores/autores.modulel';
import { DatabaseModule } from './db/database/database.module';

@Module({
  imports: [AutoresModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
