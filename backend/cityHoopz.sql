DROP DATABASE IF EXISTS cityhoopz;

CREATE DATABASE cityhoopz;

\c cityhoopz

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    email VARCHAR
);

CREATE TABLE skills(
    id SERIAL PRIMARY KEY,
    player VARCHAR REFERENCES users(username),
    shooting INT,
    handle INT,
    perimiter_defence INT,
    interior_defence INT,
    rebounding INT,
    steals INT,
    blocks INT,
    iq INT,
    leadership INT
);

CREATE TABLE courts(
    id SERIAL PRIMARY KEY,
    court_name VARCHAR,
    borough VARCHAR,
    street_address VARCHAR
);


INSERT INTO users(username,email)
    VALUES  ('Jaiden16','JFagan16@project.com'),
            ('TrapLordHuey', 'HCamacho@project.com');

INSERT INTO skills(player,shooting,handle,perimiter_defence,interior_defence, 
                    rebounding,steals,blocks,iq,leadership)
    VALUES  ('Jaiden16',3,2,3,2,1,3,2,4,3),
            ('TrapLordHuey',3,4,4,2,3,2,4,4,5);


INSERT INTO courts(court_name,borough,street_address)
    VALUES('BrotherHood', 'Bronx', 'E. 157 St &, W 161st St, The Bronx, NY 10451'),
           ('Brooklynn Bridge Park', 'Brooklynn', ' 334 Furman St, Brooklyn, NY 11201');