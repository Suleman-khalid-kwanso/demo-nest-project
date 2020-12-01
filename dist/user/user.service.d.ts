import { AuthService } from 'src/auth/auth.service';
import { UserDto } from './dto/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserInputDto } from './dto/user.input.dto';
export declare type UsersArr = Array<Object>;
export declare class UserService {
    private userRepository;
    private authService;
    constructor(userRepository: Repository<UserEntity>, authService: AuthService);
    findOne(firstName: string): Promise<UserDto>;
    getAllUsers(): Promise<UserDto[]>;
    logged(loginDetails: {
        email: string;
        password: string;
    }): Promise<string>;
    createUser(payload: UserDto): Promise<any>;
    deleteUser(userId: number): Promise<string>;
    updateUserInfo(payload: {
        userId: number;
        data: UserInputDto;
    }): Promise<string>;
}
