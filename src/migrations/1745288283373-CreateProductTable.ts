import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1745288283373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE product (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                stock INT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS product`);
    await queryRunner.query(
      `ALTER TABLE product DROP FOREIGN KEY IF EXISTS fk_product_user`,
    );
    await queryRunner.query(`DROP INDEX IF EXISTS idx_product_user ON product`);
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_product_user_id ON product`,
    );
  }
}
