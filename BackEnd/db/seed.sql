DROP DATABASE IF EXISTS volunteer_db;
CREATE DATABASE volunteer_db;
\c volunteer_db


CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email varchar UNIQUE NOT NULL,
  password varchar NOT NULL,
  phone int NOT NULL,
  is_volunteer boolean
);

INSERT INTO users
  (name,email,password,phone,is_volunteer)
VALUES
  ('Bader', 'bader@gmail.com', '090909', '05555555', 'true'),
  ('Khalid', 'Khalid@gmail.com', '090909', '0551257', 'true'),
  ('Ahmed', 'Ahmed@gmail.com', '090909', '052222222', 'true'),
  ('Sultan', 'Sultan@gmail.com', '090909', '0523555', 'false'),
  ('Fahad', 'Fahad@gmail.com', '090909', '05557438', 'false');

CREATE TABLE organization
(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  user_id int NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO organization
  (name,user_id)
VALUES
  ('Alwaleed Bin Talal Foundation', 1),
  ('King Faisal Foundation (KFF)', 2),
  ('King Faisal Foundation', 1),
  ('King Fahad Foundation', 2);