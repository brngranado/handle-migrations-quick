import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSellingTable1745268160696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE selling (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_id INT NOT NULL,
                stock_id INT NOT NULL,
                quantity INT NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (stock_id) REFERENCES stock(id)
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS selling`);
    await queryRunner.query(
      `ALTER TABLE selling DROP FOREIGN KEY IF EXISTS fk_selling_user`,
    );
    await queryRunner.query(
      `ALTER TABLE selling DROP FOREIGN KEY IF EXISTS fk_selling_stock`,
    );
    await queryRunner.query(`DROP INDEX IF EXISTS idx_selling_user ON selling`);
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_selling_stock ON selling`,
    );
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_selling_user_stock ON selling`,
    );
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_selling_user_id ON selling`,
    );
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_selling_stock_id ON selling`,
    );
  }
}
