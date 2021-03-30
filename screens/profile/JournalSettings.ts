import {ActionsEnum} from "./ActionsEnum"

export type JournalSettings = {
    [key in ActionsEnum]: number;
};