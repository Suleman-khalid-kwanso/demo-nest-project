import {MigrationInterface, QueryRunner} from "typeorm";

export class BooksWithUser1607001195175 implements MigrationInterface {
    name = 'BooksWithUser1607001195175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" ADD "userUserId" integer`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_7424824345f7ae042b136f2e628" FOREIGN KEY ("userUserId") REFERENCES "Users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_7424824345f7ae042b136f2e628"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "userUserId"`);
    }

}
