import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUpdateAndCreateAtColumn1606913807296 implements MigrationInterface {
    name = 'AddUpdateAndCreateAtColumn1606913807296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Companies" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Companies" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Companies" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Companies" DROP COLUMN "createdAt"`);
    }

}
