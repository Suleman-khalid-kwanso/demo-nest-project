import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedMany1607066852180 implements MigrationInterface {
    name = 'AddedMany1607066852180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies_categories_photo" ("companiesCompanyId" uuid NOT NULL, "photoId" integer NOT NULL, CONSTRAINT "PK_661925fca1347c590e03b0f8af9" PRIMARY KEY ("companiesCompanyId", "photoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_943b2315ab93191f6e97a8c4af" ON "companies_categories_photo" ("companiesCompanyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4d1b48559bf147d5aa17b0416e" ON "companies_categories_photo" ("photoId") `);
        await queryRunner.query(`ALTER TABLE "companies_categories_photo" ADD CONSTRAINT "FK_943b2315ab93191f6e97a8c4af4" FOREIGN KEY ("companiesCompanyId") REFERENCES "Companies"("companyId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies_categories_photo" ADD CONSTRAINT "FK_4d1b48559bf147d5aa17b0416ea" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies_categories_photo" DROP CONSTRAINT "FK_4d1b48559bf147d5aa17b0416ea"`);
        await queryRunner.query(`ALTER TABLE "companies_categories_photo" DROP CONSTRAINT "FK_943b2315ab93191f6e97a8c4af4"`);
        await queryRunner.query(`DROP INDEX "IDX_4d1b48559bf147d5aa17b0416e"`);
        await queryRunner.query(`DROP INDEX "IDX_943b2315ab93191f6e97a8c4af"`);
        await queryRunner.query(`DROP TABLE "companies_categories_photo"`);
    }

}
