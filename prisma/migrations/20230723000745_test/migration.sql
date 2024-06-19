-- CreateTable
CREATE TABLE `reff` (
    `ref_1` INTEGER NOT NULL AUTO_INCREMENT,
    `ref_2` VARCHAR(100) NULL,
    `ref_3` VARCHAR(200) NULL,
    `value` VARCHAR(100) NULL,
    `description` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`ref_1`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
