import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTable1606908897226 implements MigrationInterface {
    name = 'AddUserTable1606908897226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("userId" SERIAL NOT NULL, "firstName" character varying(250) NOT NULL, "lastName" character varying(250) NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a06d29e81a4b836dddfd684ab87" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
