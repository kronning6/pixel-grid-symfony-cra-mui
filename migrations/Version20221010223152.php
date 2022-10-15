<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221010223152 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add core tables for PixelGrid';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE pixel_pixel_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE pixel (pixel_id SERIAL NOT NULL, user_id INT DEFAULT NULL, x INT NOT NULL, y INT NOT NULL, available BOOLEAN NOT NULL, PRIMARY KEY(pixel_id), CONSTRAINT ux_pixel__x__y UNIQUE (x, y))');
        $this->addSql('CREATE INDEX ix_pixel__user_id ON pixel (user_id)');
        $this->addSql('CREATE TABLE "user" (user_id SERIAL NOT NULL, email VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, background_color VARCHAR(50) DEFAULT NULL, foreground_color VARCHAR(50) DEFAULT NULL, PRIMARY KEY(user_id), CONSTRAINT ux_user__email UNIQUE (email))');
        $this->addSql('ALTER TABLE pixel ADD CONSTRAINT fk_pixel__user_id FOREIGN KEY (user_id) REFERENCES "user" (user_id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE pixel DROP CONSTRAINT fk_pixel__user_id');
        $this->addSql('DROP SEQUENCE pixel_pixel_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_user_id_seq" CASCADE');
        $this->addSql('DROP TABLE pixel');
        $this->addSql('DROP TABLE "user"');
    }
}
