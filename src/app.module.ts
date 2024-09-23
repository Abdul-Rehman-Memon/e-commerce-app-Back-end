import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/modules/auth/auth.module';
import { ProductsModule } from './app/modules/products/products.module';
import { CartModule } from './app/modules/cart/cart.module';
import { UsersModule } from './app/modules/users/users.module';

@Module({
  imports: [AuthModule, ProductsModule, CartModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
