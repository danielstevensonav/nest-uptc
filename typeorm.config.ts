import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-34-195-69-118.compute-1.amazonaws.com',
  port: 5432,
  username: 'ltckrymyzctfgx',
  password: '93092d29833fdb1ca00a495455ca9f9ea7129616bc6ea14a95be0e91d250734c',
  database: 'd9tal2vneu254j',
  entities: [__dirname + '/src/modules/entities/*{js,ts}'],
  synchronize: false,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
