CREATE TABLE `architecturalfirm`.`admins` (
  `adminId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `adminName` VARCHAR(45) NOT NULL,
  `adminUsername` VARCHAR(45) NOT NULL,
  `adminEmail` VARCHAR(45) NOT NULL,
  `adminCity` VARCHAR(45) NOT NULL,
  `adminNumber` BIGINT NOT NULL,

  PRIMARY KEY (`adminId`),
  UNIQUE INDEX `adminId_UNIQUE` (`adminId` ASC) VISIBLE);