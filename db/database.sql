CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);
INSERT INTO empleados VALUES 
    (1, 'Percy', 12000),
    (2, 'Maria', 13000),
    (3, 'Alonso', 16000),
    (4, 'Fretzen', 12500);