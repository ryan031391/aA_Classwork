CREATE TABLE
users(
    id INTEGER PRIMARY KEY, 
    fname VARCHAR(100),
    lname VARCHAR(100)
);

CREATE TABLE
questions(
    id INTEGER PRIMARY KEY,
    title VARCHAR(100),
    body TEXT,
    user_id INTEGER NOT NULL,

    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE
questions_follows(
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL, 
    question_id INTEGER NOT NULL,

    FOREIGN KEY(user_id) REFERENCES users(id)
    FOREIGN KEY(question_id) REFERENCES questions(id)
);