import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserInputDto } from 'src/user/dto/user.input.dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJWT(user: UserInputDto): Observable<string>;
}
