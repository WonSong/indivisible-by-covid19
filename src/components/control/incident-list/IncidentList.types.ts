import { IIncidentDetail } from '../../../models/IDataContext';

export interface IIncidentListProps {
    pageSize: number;
    incidents: IIncidentDetail[];
}
