-- --------------------------------------------------------
-- 호스트:                          localhost
-- 서버 버전:                        8.0.26 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- book 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `book` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `book`;

-- 테이블 book.books 구조 내보내기
CREATE TABLE IF NOT EXISTS `books` (
  `idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT '고유번호',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '도서제목 ',
  `writer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '저자',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '도서 요약 설명',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '표지사진',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `status` enum('0','1','2','3') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1' COMMENT '현재상태(0:절판, 1:판매중, 2:발행예정, 3:삭제)',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 book.books:~22 rows (대략적) 내보내기
DELETE FROM `books`;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`idx`, `title`, `writer`, `content`, `cover`, `createdAt`, `status`) VALUES
	(3, '구운몽~~1243', '운몽아~~~234', '나비가 꿈을.... 꾸었다네~~~3434', NULL, '2021-09-02 17:20:04', '1'),
	(8, '홍길만전', '홍길만', '왜 자꾸 나를..', NULL, '2021-09-07 10:43:52', '1'),
	(9, '홍길만전', '홍길만', '왜 자꾸 나를..', NULL, '2021-09-07 10:44:21', '1'),
	(10, '홍길만전', '홍길만', '왜 자꾸 나를..', NULL, '2021-09-07 10:45:01', '1'),
	(11, '홍길만전', '홍길만', '왜 자꾸 나를..', NULL, '2021-09-07 10:46:26', '1'),
	(12, '구운몽~~1243', '운몽아~~~234', '가비가 꿈을.... 꾸었다네~~~3434', NULL, '2021-09-02 17:20:04', '3'),
	(13, '봉이김선달', '선달이', '하이요!', NULL, '2021-09-07 11:51:17', '3'),
	(14, '이순신전', '이순신', '소신에겐 아직도 12척의...', NULL, '2021-09-07 11:51:51', '1'),
	(15, '홍길동전', '길동이', '하이~', NULL, '2021-09-08 09:44:44', '1'),
	(16, 'ㅁㄴㄹㅇ', 'ㅁㅇㄹ', 'ㄴㅁㅇㄹ', NULL, '2021-09-08 09:48:25', '1'),
	(17, '홍길동', '하이', 'ㅇㅎㅇㅎㅇ', NULL, '2021-09-08 09:50:15', '1'),
	(18, '홍길동', '하이', 'ㅇㅎㅇㅎㅇ', NULL, '2021-09-08 09:50:53', '1'),
	(19, 'asdf', 'asdf', 'asdf', NULL, '2021-09-08 09:57:11', '1'),
	(20, 'asdfasfd', 'asdfasfd', 'asfdasdf', NULL, '2021-09-08 10:02:12', '1'),
	(21, '허생전', '허생', '허생의 이미지등록 테스트', NULL, '2021-09-08 10:08:25', '1'),
	(22, 'adfs', 'asdf', 'asfd', NULL, '2021-09-08 11:10:05', '1'),
	(23, 'asf', 'asfd', 'asdf', NULL, '2021-09-08 11:10:25', '1'),
	(24, 'asf', 'asf', 'asfd', NULL, '2021-09-08 12:24:33', '1'),
	(25, '홍길동전', 'ㅁㄴㅇㄹ', 'ㅇㄹㅇ', NULL, '2021-09-08 12:57:16', '1'),
	(26, '홍길동전', 'ㅁㄴㅇㄹ', 'ㅇㄹㅇ', NULL, '2021-09-08 12:57:48', '1'),
	(27, '홍길동전', 'ㅁㄴㅇㄹ', 'ㅇㄹㅇ', NULL, '2021-09-08 12:59:26', '1'),
	(28, '홍길동전', 'ㅁㄴㅇㄹ', 'ㅇㄹㅇ', NULL, '2021-09-08 13:01:10', '1'),
	(29, '홍길동전', 'ㅁㄴㅇㄹ', 'ㅇㄹㅇ', NULL, '2021-09-08 13:07:39', '1'),
	(30, '테스트', 'ㅁㄴㅇㄹ', 'ㅇㄹㄹㄹㄹㄹ', NULL, '2021-09-08 13:08:08', '1'),
	(31, 'ㅁㄴㅇㄹ', 'ㅁㄴㅇㄹ', 'ㅁㄴㅇㄹ', NULL, '2021-09-08 13:20:57', '1'),
	(32, '홍길동전', '허균', '하이', NULL, '2021-09-09 10:16:24', '1');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- 테이블 book.files 구조 내보내기
CREATE TABLE IF NOT EXISTS `files` (
  `idx` int unsigned NOT NULL AUTO_INCREMENT,
  `fidx` int unsigned NOT NULL,
  `oriname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `savename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(255) NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
  `size` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fieldname` enum('C','U') NOT NULL DEFAULT 'U' COMMENT 'C:COVER, U:UPFILE',
  `status` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1' COMMENT '0:삭제, 1:사용',
  PRIMARY KEY (`idx`),
  KEY `fidx` (`fidx`),
  CONSTRAINT `FK_files_books` FOREIGN KEY (`fidx`) REFERENCES `books` (`idx`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 book.files:~10 rows (대략적) 내보내기
DELETE FROM `files`;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` (`idx`, `fidx`, `oriname`, `savename`, `mimetype`, `size`, `createdAt`, `fieldname`, `status`) VALUES
	(1, 20, 'f1.jpg', '210908_dabfe449-00a5-4886-aceb-2be74f1783fa.jpg', 'image/jpeg', 23082, '2021-09-08 10:02:12', 'C', '1'),
	(2, 21, 'f2.jpg', '210908_d5ce1dfc-4d03-4d1c-a5e1-41a1f62fcbaa.jpg', 'image/jpeg', 28896, '2021-09-08 10:08:25', 'C', '1'),
	(3, 22, 'Bridge - 19806.mp4', '210908_789d5b58-02eb-42ac-adb8-11358e63aa8f.mp4', 'video/mp4', 354927, '2021-09-08 11:10:05', 'U', '1'),
	(4, 23, 'firebase-auth.pdf', '210908_32bb55a7-bf26-4d91-8703-15b9c1edc887.pdf', 'application/pdf', 36525, '2021-09-08 11:10:25', 'U', '1'),
	(5, 29, 'f2.jpg', '210908_38943fe5-666e-4665-befe-7903d9d6f6d8.jpg', 'image/jpeg', 28896, '2021-09-08 13:07:39', 'C', '1'),
	(6, 29, 'f2.jpg', '210908_bf71811e-9b65-4f14-9b29-253fc6b5bc4d.jpg', 'image/jpeg', 28896, '2021-09-08 13:07:39', 'U', '1'),
	(7, 30, 'f2.jpg', '210908_19c8b5a5-684b-40e6-b0be-62b3e6a1e9d1.jpg', 'image/jpeg', 28896, '2021-09-08 13:08:09', 'C', '1'),
	(8, 30, 'f2.jpg', '210908_f11699fd-4b1a-464e-a6de-99b15c60c1c0.jpg', 'image/jpeg', 28896, '2021-09-08 13:08:09', 'U', '1'),
	(9, 31, 'f7.jpg', '210908_5a7eb4cd-7d95-486b-b889-edda41ce493e.jpg', 'image/jpeg', 30770, '2021-09-08 13:20:57', 'C', '1'),
	(10, 31, 'f2.jpg', '210908_e9a71ed2-eddd-4654-836c-0e7f00ccd747.jpg', 'image/jpeg', 28896, '2021-09-08 13:20:57', 'U', '1'),
	(11, 32, 'f1.jpg', '210909_3249c6e4-30a2-4d5d-b989-321f1ebc7476.jpg', 'image/jpeg', 23082, '2021-09-09 10:16:24', 'C', '1'),
	(12, 32, 'marathon.png', '210909_114a736d-fd89-447c-88a7-6a607a80450e.png', 'image/png', 38378, '2021-09-09 10:16:24', 'U', '1');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
