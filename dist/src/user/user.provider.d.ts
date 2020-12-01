import { Connection } from 'typeorm';
import { UserEntity } from './user.entity';
export declare const userProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<UserEntity>;
    inject: string[];
}[];
