CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);
INSERT INTO empleados VALUES 
    (1, 'Percy', 15000),
    (2, 'Renzo', 10000),
    (3, 'Gonzalo', 8000),
    (4, 'Lisbeth', 2500);