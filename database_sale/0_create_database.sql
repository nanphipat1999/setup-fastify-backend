CREATE DATABASE IF NOT EXISTS `booking` CHARACTER SET `utf8` COLLATE `utf8_general_ci`;

CREATE USER 'host'@'%' IDENTIFIED BY 'host';
GRANT ALL ON *.* TO 'host'@'%';