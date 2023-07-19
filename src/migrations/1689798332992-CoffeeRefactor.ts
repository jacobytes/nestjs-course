import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1689798332992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "Coffee" RENAME COLUMN "name" to "title"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Coffee" RENAME COLUMN "title" to "name"`,
    );
  }
}
