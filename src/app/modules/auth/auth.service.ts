import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, // Assuming UserService for database interaction
    private readonly jwtService: JwtService,
  ) {}

  async signup(userDto): Promise<any> {
    const { password } = userDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });

    return newUser;
  }

  async login(credentials): Promise<any> {
    const user = await this.userService.findByUsername(credentials.username);

    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const payload = { sub: user.id, role: user.role };
    const token = this.jwtService.sign(payload, { expiresIn: '24h' });

    return { token };
  }

  async validateUser(payload: any) {
    return this.userService.findById(payload.sub);
  }
}
