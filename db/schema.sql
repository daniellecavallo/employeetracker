CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id	INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);
CREATE TABLE role (
    id	INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    
);
CREATE TABLE department (
    id	INT PRIMARY KEY AUTO_INCREMENT,