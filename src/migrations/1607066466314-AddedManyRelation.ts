import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedManyRelation1607066466314 implements MigrationInterface {
    name = 'AddedManyRelation1607066466314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies_photo_photo" ("companiesCompanyId" uuid NOT NULL, "photoId" integer NOT NULL, CONSTRAINT "PK_9f9c1490824f1539233fb651880" PRIMARY KEY ("companiesCompanyId", "photoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_117beb4cf53b8a57db672b58b4" ON "companies_photo_photo" ("companiesCompanyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_99d459bfc9f36d37d0330acfee" ON "companies_photo_photo" ("photoId") `);
        await queryRunner.query(`ALTER TABLE "companies_photo_photo" ADD CONSTRAINT "FK_117beb4cf53b8a57db672b58b46" FOREIGN KEY ("companiesCompanyId") REFERENCES "Companies"("companyId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies_photo_photo" ADD CONSTRAINT "FK_99d459bfc9f36d37d0330acfee4" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies_photo_photo" DROP CONSTRAINT "FK_99d459bfc9f36d37d0330acfee4"`);
        await queryRunner.query(`ALTER TABLE "companies_photo_photo" DROP CONSTRAINT "FK_117beb4cf53b8a57db672b58b46"`);
        await queryRunner.query(`DROP INDEX "IDX_99d459bfc9f36d37d0330acfee"`);
        await queryRunner.query(`DROP INDEX "IDX_117beb4cf53b8a57db672b58b4"`);
        await queryRunner.query(`DROP TABLE "companies_photo_photo"`);
    }

}
