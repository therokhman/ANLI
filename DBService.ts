import SQLite, {DatabaseParams} from "react-native-sqlite-storage";
export default class DBService {
    db: any = null;
    constructor() {
        this.db = SQLite.openDatabase({name : "testDB.sqlite", location: "default", createFromLocation: '~testDB.sqlite'} as DatabaseParams, this.okCallback, this.errorCallback);
    }

    private okCallback() {
        console.log("Database opened");
    }

    private errorCallback(err: any) {
        console.error("SQL Error: " + err);
    }
}