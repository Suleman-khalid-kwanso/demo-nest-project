import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable } from 'rxjs';
import { UserInputDto } from '../user/dto/user.input.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(user: UserInputDto): Observable<string> {
    return from(this.jwtService.signAsync({ user }));
  }
}
