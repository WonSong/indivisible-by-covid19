import { createContext } from 'react';
import { IDataContext } from '../../models/IDataContext';

export const DataContext = createContext<IDataContext>({});
