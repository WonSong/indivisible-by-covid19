import { IData, IIncident } from './IData';

export interface IStateIncidentCount {
    name: string;
    count: number;
    newCount: number;
}

export interface ICitiesIncidents {
    name: string;
    count: number;
    newCount: number;
    incidents: IIncident[];
}

export interface ICitiesIncidentsByState {
    [key: string]: {
        name: string;
        count: number;
        cities: ICitiesIncidents[];
    };
}

export interface IIncidentCountByMonth {
    [key: number]: number;
}

export interface IDataContext {
    isLoading: boolean;
    totalIncidents: number;
    stateIncidentCounts: IStateIncidentCount[];
    citiesIncidentsByState: ICitiesIncidentsByState;
    incidentCountByMonth: IIncidentCountByMonth;
}
