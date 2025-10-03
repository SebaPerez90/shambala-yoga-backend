import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Credential } from 'src/database/entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async login(): Promise<Credential[]> {
    return await this.authService.login();
  }

  @Get('logout')
  logout(): string {
    return this.authService.logout();
  }

  @Post('register')
  register(@Body() body: { email: string; password: string }): string {
    return this.authService.register(body.email, body.password);
  }
}
