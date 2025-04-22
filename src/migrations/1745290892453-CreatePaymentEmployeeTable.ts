import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePaymentEmployeeTable1745290892453
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE payment_employee (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_id INT NOT NULL,
                payment_id INT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (payment_id) REFERENCES payment(id)
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS payment_employee;
        `);
  }
}
