"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const bcrypt = require("bcrypt");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async findOne(firstName) {
        return await this.userRepository.findOne({
            where: { firstName },
        });
    }
    async getAllUsers() {
        return await this.userRepository.find();
    }
    async logged(loginDetails) {
        try {
            const login = await this.userRepository.findOne({
                where: { email: loginDetails.email },
            });
            const isMatch = await bcrypt.compare(loginDetails.password, login.password);
            if (isMatch) {
                return 'Successfully login';
            }
            throw new common_1.HttpException('Email or password not match !', common_1.HttpStatus.FORBIDDEN);
        }
        catch (error) {
            console.log(error);
        }
    }
    async createUser(payload) {
        try {
            const login = await this.userRepository.findOne({
                where: { email: payload.email },
            });
            if (!login) {
                const hash = await bcrypt.hash(payload.password, 10);
                payload.password = hash;
                const user = await typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(user_entity_1.UserEntity)
                    .values(payload)
                    .execute();
                payload['userId'] = user.raw[0].userId;
                const { password, lastName } = payload, result = __rest(payload, ["password", "lastName"]);
                const token = this.authService.generateJWT(result);
                return token;
            }
            return 'Email already exist !';
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
    async deleteUser(userId) {
        try {
            await typeorm_1.getConnection()
                .createQueryBuilder()
                .delete()
                .from(user_entity_1.UserEntity)
                .where('userId = :userId', { userId })
                .execute();
            return 'Successfully deleted !';
        }
        catch (error) { }
    }
    async updateUserInfo(payload) {
        try {
            await typeorm_1.getConnection()
                .createQueryBuilder()
                .update(user_entity_1.UserEntity)
                .set(payload.data)
                .where('userId = :userId', { userId: payload.userId })
                .execute();
            return 'Successfully updated !';
        }
        catch (error) {
            console.log(error);
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map