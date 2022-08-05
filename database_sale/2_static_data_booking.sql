USE `booking`;

SET NAMES utf8;

INSERT INTO `booking`.`booking_list` (`booking_id`, `booking_name`)
VALUES
	(1, 'test1'),
	(2, 'test2');

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `booking`.`booking_status` (`booking_id`, `booking_status_id`, `booking_status_name`, `create_dt`)
VALUES
	(1, 1, 'y', '2022-07-25 14:44:00');
