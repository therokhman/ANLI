import {ActionsEnum} from "./ActionsEnum";

export type JournalType = {
    [key in ActionsEnum]: Date[];
};