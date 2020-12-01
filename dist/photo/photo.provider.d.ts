import { Connection, Repository } from 'typeorm';
import { Photo } from './photo.entity';
export declare const photoProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Photo>;
    inject: string[];
}[];
