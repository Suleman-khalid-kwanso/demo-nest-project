import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCompanyTable1606912818785 implements MigrationInterface {
    name = 'AddCompanyTable1606912818785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Companies" ("companyId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_03137f09c98116ae2ef444f3928" PRIMARY KEY ("companyId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Companies"`);
    }

}
