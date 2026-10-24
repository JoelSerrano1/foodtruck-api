/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Migrations1764348914450 {
    name = 'Migrations1764348914450'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nom"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cognom"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cognom" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nom" character varying NOT NULL`);
    }
}
