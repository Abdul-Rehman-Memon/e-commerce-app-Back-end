import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  entities: ['./models/**/*.entity.ts'],
  password: process.env.DATABASE_PASSWORD,
  synchronize: true,
  logging: 'all',
};
