import React from 'react';
import { Data } from '../interfaces/Data';

type Context = {
    id: string
    // handleId: (id: string) => void
}

const DataContext = React.createContext<Data[]>([]);

export const IdProvider = DataContext.Provider;

export default DataContext;