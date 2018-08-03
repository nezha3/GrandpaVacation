CREATE TABLE IF NOT EXISTS vacationDescrip (
    id INTEGER PRIMARY KEY,
    vacationName TEXT,
    vacationDate TEXT,
    vacationLocation TEXT,
    vacationDetail TEXT
);
DELETE FROM vacationDescrip;
INSERT INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail) VALUES ('Gold Coast Camping', '23 Feb 2016', 'Gold coast beach QLD', 'with Georage whole family, a great joyful day.');
INSERT INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail) VALUES ( 'Thailand Vacation One' , '05 June 2016', 'Parpae Palace Club Thailand', 'with John Snow and Karen Willam, an extreme tour to see trans-girls.');
INSERT INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail) VALUES ('Greek Island Vacation', '16 Aug 2016', 'Jupplen Island EU', 'with Georage whole family, an wonderful holiday.');
INSERT INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail) VALUES ( 'Sunshine Coast Holidays', '14 Sep 2016', 'Sunshine coast beach QLD', 'with John and the whole family, a great joyful day.');
INSERT INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail) VALUES ( 'St Angel Primary School Tour', '21 Oct 2016','St Angel Brisbane QLD', 'with Lucy, Lily and Bob, a grandpa day with my three loved kids.');
INSERT INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail) VALUES ( 'Redland Manly Village', '3 Jan 2017', 'Manly Redland QLD', 'with Georage whole family, a happy day to visit retirement village for old friends.');
