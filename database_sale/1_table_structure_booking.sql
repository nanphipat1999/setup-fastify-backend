USE `booking`;

# ************************************************************
# Sequel Ace SQL dump
# Version 20033
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 0.0.0.0 (MySQL 5.6.51)
# Database: booking
# Generation Time: 2022-07-25 07:48:07 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table booking_list
# ------------------------------------------------------------

DROP TABLE IF EXISTS `booking_list`;

CREATE TABLE `booking_list` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_name` varchar(11) NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `booking_list` WRITE;
/*!40000 ALTER TABLE `booking_list` DISABLE KEYS */;

INSERT INTO `booking_list` (`booking_id`, `booking_name`)
VALUES
	(1,'test1'),
	(2,'test2');

/*!40000 ALTER TABLE `booking_list` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table booking_status
# ------------------------------------------------------------

DROP TABLE IF EXISTS `booking_status`;

CREATE TABLE `booking_status` (
  `booking_id` int(11) DEFAULT NULL,
  `booking_status_id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_status_name` enum('y','n') NOT NULL,
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_status_id`),
  KEY `booking_id` (`booking_id`),
  CONSTRAINT `booking_status_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking_list` (`booking_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `booking_status` WRITE;
/*!40000 ALTER TABLE `booking_status` DISABLE KEYS */;

INSERT INTO `booking_status` (`booking_id`, `booking_status_id`, `booking_status_name`, `create_dt`)
VALUES
	(1,1,'y','2022-07-25 14:44:00');

/*!40000 ALTER TABLE `booking_status` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
