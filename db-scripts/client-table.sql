CREATE TABLE `architecturalfirm`.`clients` (
  `clientId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `clientName` VARCHAR(45) NOT NULL,
  `clientUsername` VARCHAR(45) NOT NULL,
  `clientEmail` VARCHAR(45) NOT NULL,
  `clientCity` VARCHAR(45) NOT NULL,
  `clientNumber` BIGINT NOT NULL,

  PRIMARY KEY (`clientId`),
  UNIQUE INDEX `clientId_UNIQUE` (`clientId` ASC) VISIBLE);