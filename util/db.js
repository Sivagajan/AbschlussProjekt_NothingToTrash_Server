import { MongoClient } from "mongodb"

const URL = process.env.MONGODB_URL
const DBNAME = process.env.DBNAME

const client = new MongoClient(URL)

let db

export const getDB = async () => {
    if(db) 
        return db
    await client.connect()
    db = client.db(DBNAME)

    if(db){
        return db
    }else{
        console.log('Fehler bei der Datenbank')
    }
}