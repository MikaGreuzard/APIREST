<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230505071743 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE reason (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, reason_name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE visit (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, encoutered_person_id INTEGER DEFAULT NULL, reason_id INTEGER DEFAULT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, entrance_date DATETIME NOT NULL, leaving_date DATETIME DEFAULT NULL, CONSTRAINT FK_437EE93968D83309 FOREIGN KEY (encoutered_person_id) REFERENCES employee (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_437EE93959BB1592 FOREIGN KEY (reason_id) REFERENCES reason (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_437EE93968D83309 ON visit (encoutered_person_id)');
        $this->addSql('CREATE INDEX IDX_437EE93959BB1592 ON visit (reason_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE reason');
        $this->addSql('DROP TABLE visit');
    }
}
