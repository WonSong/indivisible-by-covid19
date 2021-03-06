import * as React from 'react';
import { IData, IIncident } from '../../models/IData';
import { DataContext } from './DataContext';
import {
    IStateIncidentCount,
    IDataContext,
    IIncidentCountByMonth,
    IIncidentsByState,
    IIncidentDetail,
} from '../../models/IDataContext';
import { slugify } from '../../utils/slugify';

function getIncidentCountbyMonth(incidents: IIncident[]): IIncidentCountByMonth {
    const incidentCountByMonth: IIncidentCountByMonth = {};

    incidents.forEach((incident: IIncident): void => {
        const date = new Date(incident.date);
        const month = date.getMonth();

        incidentCountByMonth[month] = incidentCountByMonth[month] || 0;
        incidentCountByMonth[month]++;
    });

    return incidentCountByMonth;
}

function prepData(data: IData): IDataContext {
    const stateIncidentCounts: IStateIncidentCount[] = [];
    const incidentsByState: IIncidentsByState = {};
    const incidents: IIncidentDetail[] = [];

    for (const stateName in data) {
        let stateIncidentCount = 0;
        const slugifiedStateName = slugify(stateName);

        const stateData = data[stateName];
        incidentsByState[slugifiedStateName] = {
            stateName,
            incidents: [],
        };

        for (const cityName in stateData) {
            const cityData = stateData[cityName];

            stateIncidentCount += cityData.incidents.length;

            cityData.incidents.forEach((incident: IIncident) => {
                const incidentDetail: IIncidentDetail = {
                    ...incident,
                    cityName,
                    cityCoordinate: cityData.coordinate,
                };

                incidentsByState[slugifiedStateName].incidents.push(incidentDetail);
                incidents.push(incidentDetail);
            });
        }

        stateIncidentCounts.push({
            name: stateName,
            count: stateIncidentCount,
            newCount: 0,
        });

        incidentsByState[slugifiedStateName].incidents.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
    }

    stateIncidentCounts.sort((a, b) => (a.count > b.count ? -1 : 1));
    incidents.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return {
        isLoading: false,
        totalIncidents: incidents.length,
        incidents,
        stateIncidentCounts,
        incidentCountByMonth: getIncidentCountbyMonth(incidents),
        incidentsByState,
    };
}

export function DataProvider(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;
    const [state, setState] = React.useState<IDataContext>({
        isLoading: true,
        totalIncidents: 0,
        incidents: [],
        stateIncidentCounts: [],
        incidentCountByMonth: {},
        incidentsByState: {},
    });

    React.useEffect(() => {
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch data');

                return response.json();
            })
            .then(prepData)
            .then(setState);
    }, []);

    return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}
