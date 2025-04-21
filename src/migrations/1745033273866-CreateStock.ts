import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStock1745033273866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              CREATE TABLE stock (
                  id INT PRIMARY KEY AUTO_INCREMENT,
                  article VARCHAR(255) NOT NULL,
                  slug VARCHAR(255) UNIQUE NOT NULL,
                  image VARCHAR(255) NOT NULL,
                  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
              );
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS stock`);
  }
}
