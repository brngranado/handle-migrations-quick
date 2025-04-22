import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCustomerSupportSalesTable1745291151544
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE customer_support_sales (
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
    await queryRunner.query(`
            DROP TABLE IF EXISTS customer_support_sales;
        `);
  }
}
