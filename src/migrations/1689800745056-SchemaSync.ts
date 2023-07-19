import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1689800745056 implements MigrationInterface {
  name = 'SchemaSync1689800745056';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Coffee" ADD "recommendations" integer NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Coffee" DROP COLUMN "recommendations"`,
    );
  }
}
