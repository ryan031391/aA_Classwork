PRAGMA foreign_keys = ON;

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

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE
    replies(
        id INTEGER PRIMARY KEY,
        question_id INTEGER NOT NULL,
        parent_id INTEGER,
        user_id INTEGER NOT NULL,
        body VARCHAR(100),


        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (question_id) REFERENCES questions(id),
        FOREIGN KEY (parent_id) REFERENCES replies(id)
    );


CREATE TABLE
    question_likes(
        id INTEGER PRIMARY KEY,
        user_id INTEGER NOT NULL,
        question_id INTEGER NOT NULL,

        FOREIGN KEY (user_id) REFERENCES users(id)
        FOREIGN KEY (question_id) REFERENCES questions(id)
    );


INSERT INTO
    users (fname, lname)
