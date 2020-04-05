import { Coordinate } from './Coordinate';

export interface IData {
    [key: string]: IStateData;
}

export interface IStateData {
    [key: string]: ICityData;
}

export interface ICityData {
    coordinate: Coordinate;
    incidents: IIncident[];
}

export interface IIncident {
    date: string;
    title: string;
    source: string;
    link: string;
    image?: string;
}
