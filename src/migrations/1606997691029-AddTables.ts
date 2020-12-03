import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTables1606997691029 implements MigrationInterface {
    name = 'AddTables1606997691029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("bookId" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "author" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_58da082103f7e0eacfc37553d32" PRIMARY KEY ("bookId"))`);
        await queryRunner.query(`CREATE TABLE "Companies" ("companyId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03137f09c98116ae2ef444f3928" PRIMARY KEY ("companyId"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("userId" SERIAL NOT NULL, "firstName" character varying(250) NOT NULL, "lastName" character varying(250) NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "photoId" integer, CONSTRAINT "REL_b02407295b4a608235b06ea09a" UNIQUE ("photoId"), CONSTRAINT "PK_a06d29e81a4b836dddfd684ab87" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "description" text NOT NULL, "filename" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_b02407295b4a608235b06ea09a7" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_b02407295b4a608235b06ea09a7"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Companies"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
