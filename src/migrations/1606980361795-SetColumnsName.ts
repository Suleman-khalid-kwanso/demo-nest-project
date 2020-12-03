import {MigrationInterface, QueryRunner} from "typeorm";

export class SetColumnsName1606980361795 implements MigrationInterface {
    name = 'SetColumnsName1606980361795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "books" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "books" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
