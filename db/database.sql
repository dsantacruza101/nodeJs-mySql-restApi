CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee ( 
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (1, 'Juan', 1000),
    (2, 'Juan', 1000),
    (3, 'Juan', 1000),
    (4, 'Juan', 1000),
    (5, 'Juan', 1000);


    -- Select employee by id
    SELECT * FROM employee WHERE id = ?

    -- Delete employee by id
    DELETE FROM employee WHERE id = ?