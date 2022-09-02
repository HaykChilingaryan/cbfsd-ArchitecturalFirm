CREATE TABLE `architecturalfirm`.`meetings` (
  `meetingId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `meetingTitle` VARCHAR(100) NOT NULL,
  `meetingNumberOfPeople` INT NOT NULL,
  `meetingRoom` VARCHAR(10) NOT NULL,
  `meetingDate` DATETIME NOT NULL,
  `meetingHost` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`meetingId`),
  UNIQUE INDEX `meetingId_UNIQUE` (`meetingId` ASC) VISIBLE,
  INDEX `meetingHost_idx` (`meetingHost` ASC) VISIBLE,
  CONSTRAINT `meetingHost`
    FOREIGN KEY (`meetingHost`)
    REFERENCES `architecturalfirm`.`admins` (`adminId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
