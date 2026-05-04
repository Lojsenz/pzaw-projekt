import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "..", "database.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter })

async function add(user, pass) {
    await prisma.users.upsert({
        where: {login: user},
        update: {},
        create: {login: user, password: pass},
    })
}

async function login(user) {
    return prisma.users.findUnique({ where: {login: user}})

}

async function getNotes(userId, isAdmin) {
    if (isAdmin) return prisma.notes.findMany()
    return prisma.notes.findMany({where: {user_login: userId}})
}

async function getNoteById(id) {
    return prisma.notes.findUnique({where: {id}})
}

async function addNote(Title, note, userId) {
    return prisma.notes.create({data: {Title, Note: note, user_login: userId}})
}

async function deleteNote(NoteId) {
    return prisma.notes.delete({where: {id: NoteId}})
}

export {add, login, getNotes, getNoteById, addNote, deleteNote}
