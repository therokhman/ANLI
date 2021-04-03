import * as SQLite from "expo-sqlite";
import {WebSQLDatabase} from "expo-sqlite/src/SQLite.types";
import {ActionsEnum} from "./screens/profile/ActionsEnum";

export default class DBService {
    db: WebSQLDatabase | null = null;
    constructor() {
        // @ts-ignore
        this.db = SQLite.openDatabase('appDBtest.db');
        this.initTables();
    }

    addAction(action: ActionsEnum, stamp: string): void{
        this.db?.transaction(tx => {
            console.log('add action');
            tx.executeSql(
                "INSERT INTO actions (stamp, action) VALUES ( ?, ?)",
                [stamp, action],
                (_, { rows: { _array } }) => {
                    this.actions((d:any) => console.log(d));
                },
                (_, error) => {
                    console.error(error);
                    return false;
                }
            );
        });
    }

    addMessage(callback: any): void {
        this.db?.transaction(tx => {
            let stamp = new Date().toISOString();
            tx.executeSql(
                "INSERT INTO messages (stamp) VALUES (?)",
                [stamp],
                (_, { rows: { _array } }) =>  callback(stamp),
                (_, error) => {
                    console.error(error);
                    return false;
                }
            );
        });
    }

    addNote({date, blood, sensitivity, caries, pigmentation, tartar}: NoteProps, callback: any){
        this.db?.transaction(tx => {
            let stamp = new Date().toISOString();
            tx.executeSql(
                "INSERT INTO notes (stamp, dateVal, blood, sensitivity, caries, pigmentation, tartar) VALUES ( ?, ?, ?, ?, ?, ?, ?)",
                [stamp, date, blood, sensitivity, caries, pigmentation, tartar],
                (_, { rows: { _array } }) =>  callback(stamp),
                (_, error) => {
                    console.error(error);
                    return false;
                }
            );
        });
    }

    // @ts-ignore
    messages(callback: any): void {
        this.db?.transaction(tx => {
            tx.executeSql(
                "INSERT INTO messages (stamp) VALUES (?)",
                [new Date().toISOString()],
                (_, { rows: { _array } }) =>  callback(_array),
                (_, error) => {
                    console.error(error)
                    return false;
                }
            );
        });
    }

    // @ts-ignore
    actions(callback: any): void {
        this.db?.transaction(tx => {
            console.log('actions');
            tx.executeSql(
                "SELECT stamp, action FROM actions",
                [],
                (_, { rows: { _array } }) =>  callback(_array),
                (_, error) => {
                    console.error(error);
                    return false;
                }
            );
        });

    }

    // @ts-ignore
    notes(callback: any): void {
        this.db?.transaction(tx => {
            tx.executeSql(
                `SELECT stamp, 
                        dateVal, 
                        blood, 
                        sensitivity, 
                        caries, 
                        pigmentation, 
                        tartar
                     FROM notes`,
                [],
                (_, { rows: { _array } }) =>  callback(_array),
                (_, error) => {
                    console.error(error);
                    return false;
                }
            );
        });
    }


    private initTables() {
        this.db?.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, stamp VARCHAR(24))",
                [],
            );
        });
        this.db?.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS actions (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, stamp VARCHAR(24), action VARCHAR(24))",
                [],
            );
        });
        this.db?.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, stamp VARCHAR(24), dateVal VARCHAR(24), blood INTEGER, sensitivity INTEGER, caries INTEGER, pigmentation INTEGER, tartar INTEGER)",
                [],
            );
        });
    }
}
