import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() userData) {
    return this.authService.signup(userData);
  }

  @Post('login')
  async login(@Body() credentials) {
    return this.authService.login(credentials);
  }
}
