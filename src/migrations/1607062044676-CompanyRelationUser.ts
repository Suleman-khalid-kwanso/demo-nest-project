import {MigrationInterface, QueryRunner} from "typeorm";

export class CompanyRelationUser1607062044676 implements MigrationInterface {
    name = 'CompanyRelationUser1607062044676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "companyCompanyId" uuid`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_2a6cfdc2da3d22932255ed9e0fa" FOREIGN KEY ("companyCompanyId") REFERENCES "Companies"("companyId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_2a6cfdc2da3d22932255ed9e0fa"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "companyCompanyId"`);
    }

}
