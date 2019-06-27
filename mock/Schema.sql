-- don't forget to CREATE EXTENSION citext before loading;
-- psql biscuit < Schema.sql;

CREATE TABLE user_info (
  id BIGSERIAL UNIQUE,
  email VARCHAR(200) NOT NULL unique,
  userName VARCHAR(100),
  password VARCHAR(100),
  avatar VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE time_period (
  id BIGSERIAL UNIQUE,
  userId INTEGER NOT NULL,
  startPeriod DATE NOT NULL,
  endPeriod DATE NOT NULL,
  totalOwed VARCHAR(100) NOT NULL,
  totalHours DECIMAL(6,2) NOT NULL,
  totalEarned VARCHAR(100) NOT NULL,
  note TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE income_info (
  id BIGSERIAL UNIQUE,
  userId INTEGER NOT NULL,
  placeName VARCHAR(200),
  hourRate VARCHAR(20),
  PRIMARY KEY (id)
);
		
CREATE TABLE daily_tracker (
  id BIGSERIAL UNIQUE,
  userId INTEGER NOT NULL,
  periodId INTEGER NOT NULL,
  totalSales VARCHAR(100),
  tipOut VARCHAR(100),
  cashOwed VARCHAR(100),
  hours decimal,
  note TEXT,
  PRIMARY KEY (id)
);

ALTER TABLE income_info 
ADD FOREIGN KEY (userId) REFERENCES user_info (id);
ALTER TABLE time_period 
ADD FOREIGN KEY (userId) REFERENCES user_info (id);
ALTER TABLE daily_tracker 
ADD FOREIGN KEY (userId) REFERENCES user_info (id);
ALTER TABLE daily_tracker 
ADD FOREIGN KEY (periodId) REFERENCES time_period (id);
