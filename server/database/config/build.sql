ROLLBACK;
BEGIN;

DROP TABLE IF EXISTS cities cascade ;

CREATE TABLE cities 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100)
);

INSERT INTO cities (name, city) VALUES ('Rana', 'Gaza'),('Noor','Nablus');
COMMIT;