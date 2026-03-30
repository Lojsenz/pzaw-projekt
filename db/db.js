import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';
const db = new Database('database.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY,
    login VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
  )
`)

const hash = bcrypt.hashSync(process.env.ADMIN_PASS, 10);
const SetAdmin = db.prepare(
        `INSERT OR IGNORE INTO Users (login,password) VALUES (?,?)`
    );

SetAdmin.run(process.env.ADMIN_LOGIN,hash);


export function add(user,pass){
    const query = db.prepare(
        `INSERT OR IGNORE INTO Users (login,password) VALUES (?,?)`
    );
    query.run(user,pass);
};

export function login(user){
    const query = db.prepare(
        `SELECT id,login,password FROM Users WHERE Users.login = ?`
    );
    return query.get(user);
    
};




db.exec(`CREATE TABLE IF NOT EXISTS Notes (
  id INTEGER PRIMARY KEY,
  user_login INTEGER NOT NULL,
  Title TEXT NOT NULL,
  Note TEXT NOT NULL,
  FOREIGN KEY (user_login) REFERENCES Users(id)
)`)

export function getNotes(userId, isAdmin){
    if (isAdmin) {
        return db.prepare(`SELECT id, Title FROM Notes`).all()
    }
    return db.prepare(`SELECT id, Title FROM Notes WHERE user_login = ?`).all(userId);
};

export function getNoteById(id){
    return db.prepare(`SELECT * FROM Notes WHERE id = ?`).get(id);
}

export function addNote(Title, note,userId){
    const query = db.prepare(`INSERT INTO Notes (Title,Note,user_login) VALUES (?,?,?)`);
    query.run(Title,note, userId);
}

export function deleteNote(NoteId){
    const query = db.prepare(`DELETE FROM Notes Where id = ?`);
    query.run(NoteId);
}