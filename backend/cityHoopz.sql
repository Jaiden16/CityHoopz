DROP DATABASE IF EXISTS cityhoopz;

CREATE DATABASE cityhoopz;

\c cityhoopz

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR,
    email VARCHAR
);

CREATE TABLE skills(
    id SERIAL PRIMARY KEY,
    player INT REFERENCES users(id),
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
    court_name VARCHAR UNIQUE,
    borough VARCHAR UNIQUE,
    street_address VARCHAR
);

CREATE TABLE home_courts(
    id SERIAL PRIMARY KEY,
    home_court INT REFERENCES courts(id),
    player INT REFERENCES users(id)

);

CREATE TABLE profile_picture(
    id SERIAL PRIMARY KEY,
    player INT REFERENCES users(id),
    picture VARCHAR
);


INSERT INTO users(username,password,email)
    VALUES  ('Jaiden16','1234','JFagan16@project.com'),
            ('TrapLordHuey','1234' ,'HCamacho@project.com');

INSERT INTO skills(player,shooting,handle,perimiter_defence,interior_defence, 
                    rebounding,steals,blocks,iq,leadership)
    VALUES  (1,3,2,3,2,1,3,2,4,3),
            (2,3,4,4,2,3,2,4,4,5);


INSERT INTO courts(court_name,borough,street_address)
    VALUES('BrotherHood', 'Bronx', 'E. 157 St &, W 161st St, The Bronx, NY 10451'),
           ('Brooklynn Bridge Park', 'Brooklynn', ' 334 Furman St, Brooklyn, NY 11201');

INSERT INTO home_courts(home_court,player)
    VALUES(1,1),(1,2);

INSERT INTO profile_picture(player,picture)
    VALUES(1,'http://localhost:3001/images/1593214039969-IMG_5929.JPG'),
           (2,'http://localhost:3001/images/1593213981848-IMG_5834.jpg');