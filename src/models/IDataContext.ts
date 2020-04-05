import { IIncident } from './IData';

export interface IStateIncidentCount {
    name: string;
    count: number;
    newCount: number;
}

export interface IIncidentCountByMonth {
    [key: number]: number;
}

export interface IStateIncident extends IIncident {
    cityName: string;
    cityCoordinate: number[];
}

export interface IStateIncidents {
    stateName: string;
    incidents: IStateIncident[];
}

export interface IIncidentsByState {
    [key: string]: IStateIncidents;
}

export interface IDataContext {
    isLoading: boolean;
    totalIncidents: number;
    stateIncidentCounts: IStateIncidentCount[];
    incidentCountByMonth: IIncidentCountByMonth;
    incidentsByState: IIncidentsByState;
}
