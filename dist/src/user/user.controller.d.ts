import { UserDto } from './dto/user.dto';
import { CreateUserDto, UserInputDto } from './dto/user.input.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    fetchUsers(): Promise<UserDto[]>;
    findUser(firstName: string): Promise<UserDto>;
    signUp(user: CreateUserDto): Promise<any>;
    loginUser(email: string, password: string): Promise<string>;
    deleteUser(id: number): Promise<string>;
    updateUser(userInput: UserInputDto, id: number): Promise<string>;
}
