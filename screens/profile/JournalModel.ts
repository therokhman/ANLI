import {ActionsEnum} from "./ActionsEnum";
import {JournalType} from "./JournalType";
import {JournalSettings} from "./JournalSettings";
import {JournalMode} from "./JournalModeEnum";

export default class JournalModel {
    journal: JournalType = {} as JournalType;
    today = new Date();
    settings: JournalSettings = {} as JournalSettings;

    constructor(actions: ActionsResponse, settings: JournalSettings) {
        Object.keys(actions).forEach((key) => {
            if (key in ActionsEnum) {
                this.journal[key as ActionsEnum] = this.getDates(actions[key]);
            }
        });
        this.settings = settings;
    }

    private getDates(dates: string[]): Date[] {
        let parsedDates: Date[] = [];
        if (dates) {
            dates.forEach((date) => {
                parsedDates.push(new Date(date))
            });
        }
        return parsedDates;
    }

    private monthTotal(): number {
        return new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    }

    private perDay(action: ActionsEnum): number {
        if (this.settings.hasOwnProperty(action)) {
            return this.settings[action];
        }
        return 1;
    }

    private thisWeek(action: ActionsEnum): number {
        let count = 0;
        let currDay = this.today.getDay();
        let start = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - (currDay - 1));
        let end = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + (7 - currDay), 23, 59, 59);
        if (this.journal.hasOwnProperty(action)) {
            this.journal[action].forEach((stamp) => {
                if (end > stamp && stamp > start) count++;
            });
        }
        return count;
    }

    private thisDay(action: ActionsEnum): number {
        let count = 0;
        let start = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        let end = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 23, 59, 59);
        if (this.journal.hasOwnProperty(action)) {
            this.journal[action].forEach((stamp) => {
                if (end > stamp && stamp > start) count++;
            });
        }
        return count;
    }

    private thisMonth(action: ActionsEnum): number {
        let count = 0;
        let start = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
        let end = new Date(this.today.getFullYear(), this.today.getMonth(), this.monthTotal(), 23, 59, 59);
        if (this.journal.hasOwnProperty(action)) {
            this.journal[action].forEach((stamp) => {
                if (end > stamp && stamp > start) count++;
            });
        }
        return count;
    }

    public totalValue(action: ActionsEnum, mode: JournalMode): number {
        switch (mode) {
            case JournalMode.DAY:
                return this.perDay(action);
            case JournalMode.WEEK:
                return this.perDay(action) * 7;
            case JournalMode.MONTH:
                return this.perDay(action) * this.monthTotal();
            default:
                return 0;
        }
    }

    public currentValue(action: ActionsEnum, mode: JournalMode) {
        switch (mode) {
            case JournalMode.DAY:
                return this.thisDay(action);
            case JournalMode.MONTH:
                return this.thisWeek(action);
            case JournalMode.WEEK:
                return this.thisMonth(action);
            default:
                return 0;
        }
    }

    public toString() {
        return JSON.stringify({
            actions: this.journal,
            settings: this.settings
        })
    }

    public add(action: ActionsEnum) {
        if (this.journal.hasOwnProperty(action)) {
            this.journal[action].push(new Date());
        } else {
            let temp = [];
            temp.push(new Date);
            this.journal[action] = temp;
        }
    }
}