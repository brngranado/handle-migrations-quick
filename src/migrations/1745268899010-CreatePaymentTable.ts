import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePaymentTable1745268899010 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE payment (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_id INT NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                payment_method ENUM('credit_card', 'paypal', 'bank_transfer') NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS payment`);
    await queryRunner.query(
      `ALTER TABLE payment DROP FOREIGN KEY IF EXISTS fk_payment_user`,
    );
    await queryRunner.query(`DROP INDEX IF EXISTS idx_payment_user ON payment`);
    await queryRunner.query(
      `DROP INDEX IF EXISTS idx_payment_user_id ON payment`,
    );
  }
}
