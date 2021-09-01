# MySQL 사용법
## CLI Program 사용법
- CLI (Command Line Interface)
환경변수설정

```bash
mysql -u root -p *******
mysqlsh
```
- MySQL(MySQL Shell)을 오픈
```sql
-- 데이터베이스 만들기
CREATE DATABASE sample;

-- 데이터베이스 사용하기
USE sample;

-- 테이블 만들기
CREATE TABLE `users` (`idx` int(11) NOT NULL, `name` varchar(255) NOT NULL, `userid` varchar(24) NOT NULL, `userpw` varchar(255) NOT NULL ,`email` varchar(255) DEFAULT NULL, PRIMARY KEY (`idx`)) DEFAULT CHARSET=utf8;

-- 만들어진 테이블 보기
SHOW TABLES;

-- 데이터 다루기
-- CRUD(Create[POST/INSERT], Read[GET/SELECT], Update[PUT/UPDATE], Delete[DELETE/DELETE])

-- 데이터 추가
INSERT INTO 테이블명 (...필드명) VALUES (...값);
INSERT INTO users SET 필드명1=값, 필드명2=값, ...;
INSERT INTO users (`idx`, `name`, `userid`, `userpw`, `email`) VALUES (1, '홍길동', 'hong', '1234', 'hong@naver.com');
INSERT INTO users SET idx=2, name='홍길순', userid='hongks', userpw='1111', email='hongks@google.com';

-- 데이터 읽기 - 가장 복잡하다. 배울게 무궁무진하다.
SELECT * FROM 테이블명; 
SELECT * FROM users; 

-- 데이터 수정
UPDATE 테이블명 SET `필드명1`='값', `필드명2`='값' ... WHERE 조건;
UPDATE users SET `userpw`='12345', `email`='hong2@naver.com' WHERE idx=1;

-- 데이터 삭제
DELETE FROM 테이블명 WHERE 조건;
DELETE FROM users WHERE idx=1;

-- ★★★★★ DELETE와 UPDATE는 꼭!!!! WHERE절을 넣어야한다. ★★★★★
```