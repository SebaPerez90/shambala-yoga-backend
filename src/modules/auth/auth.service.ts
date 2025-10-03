import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credential } from 'src/database/entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Credential)
    private credentialRepository: Repository<Credential>,
  ) {}

  async login(): Promise<Credential[]> {
    return await this.credentialRepository.find();
  }

  logout() {
    return 'This action logs out a user';
  }

  register(email: string, password: string) {
    this.credentialRepository.save({ email, password });
    return `This action registers a user with email: ${email} & password: ${password}`;
  }
}
