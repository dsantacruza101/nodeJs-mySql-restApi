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

    -- Update employee by id
    UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?

    -- Post employee
    INSERT INTO employee (name, salary) VALUES (?, ?)


CREATE TABLE usuarios (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    lastName VARCHAR(45) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    password VARCHAR(12) DEFAULT NULL
    PRIMARY KEY(id)
);

INSERT INTO usuarios VALUES
    (1, 'Juan', 'Taoe', 'juan@email.com', '123'),
    (2, 'Pepe', 'El toro', 'pepe@email.com', '123');
    
    