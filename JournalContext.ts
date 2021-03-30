import { createContext, useContext } from 'react';
import JournalModel from "./screens/profile/JournalModel";
import {ActionsEnum} from "./screens/profile/ActionsEnum";
import {JournalSettings} from "./screens/profile/JournalSettings";

export type JournalContextType = {
    model: JournalModel;
    setModel: (model: JournalModel) => void;
}

export const JournalContext = createContext<JournalContextType>({model: {} as JournalModel, setModel: model => {console.warn('no model provider')}});
export const useJournal = () => useContext(JournalContext);