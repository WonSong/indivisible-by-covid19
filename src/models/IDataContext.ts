import { IIncident } from './IData';

export interface IStateIncidentCount {
    name: string;
    count: number;
    newCount: number;
}

export interface IIncidentCountByMonth {
    [key: number]: number;
}

export interface IIncidentDetail extends IIncident {
    cityName: string;
    cityCoordinate: number[];
}

export interface IStateIncidents {
    stateName: string;
    incidents: IIncidentDetail[];
}

export interface IIncidentsByState {
    [key: string]: IStateIncidents;
}

export interface IDataContext {
    isLoading: boolean;
    totalIncidents: number;
    incidents: IIncidentDetail[];
    stateIncidentCounts: IStateIncidentCount[];
    incidentCountByMonth: IIncidentCountByMonth;
    incidentsByState: IIncidentsByState;
}
