import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  password: 'your_password',
  database: 'ecommerce_db',
  synchronize: true, // For dev only
};
