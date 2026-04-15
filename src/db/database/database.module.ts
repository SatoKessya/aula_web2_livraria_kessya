import { Global, Module } from '@nestjs/common';
import { DATABASE_URL, DRIZZLE } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import { connect } from 'mssql';

import type { config as MsSqlConfig } from 'mssql';
import * as schema from '../schemas/index';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: async () => {
        const dbConfig: MsSqlConfig = {
          server: 'SRV-BD-1',
          port: 1433,
          user: 'alunos_des225',
          password: '123',
          database: 'des225_kessya',
          options: {
            encrypt: false,
            trustServerCertificate: true,
          },
        };

        const pool = await connect(dbConfig);

        return drizzle({ client: pool, schema: schema });
      },
    },
  ],

  exports: [DRIZZLE],
})
export class DatabaseModule {}
