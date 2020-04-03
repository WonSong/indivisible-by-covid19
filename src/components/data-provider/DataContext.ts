import { createContext } from 'react';
import { IData } from '../../models/IData';

export const DataContext = createContext<IData>({});
