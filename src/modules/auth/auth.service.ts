import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Add your authentication methods here
  login() {
    return 'This action logs in a user';
  }
}
