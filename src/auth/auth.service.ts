import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'I have been signed up' };
  }

  signup() {
    return { msg: 'I have been signed up' };
  }
}
