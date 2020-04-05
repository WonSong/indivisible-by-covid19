import * as React from 'react';
import { IData, IIncident } from '../../models/IData';
import { DataContext } from './DataContext';
import {
    IStateIncidentCount,
    IDataContext,
    ICitiesIncidentsByState,
    ICitiesIncidents,
    IIncidentCountByMonth,
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
    let totalIncidents = 0;
    const stateIncidentCounts: IStateIncidentCount[] = [];
    const citiesIncidentsByState: ICitiesIncidentsByState = {};
    let incidents: IIncident[] = [];

    for (const stateName in data) {
        let stateIncidentCount = 0;
        const stateData = data[stateName];
        const stateCitiesData: ICitiesIncidents[] = [];

        for (const cityName in stateData) {
            const cityData = stateData[cityName];

            stateIncidentCount += cityData.incidents.length;
            totalIncidents += cityData.incidents.length;

            const citiesIncidents: ICitiesIncidents = {
                name: cityName,
                count: cityData.incidents.length,
                newCount: 0,
                incidents: cityData.incidents,
            };

            stateCitiesData.push(citiesIncidents);
            incidents = incidents.concat(cityData.incidents);
        }

        stateIncidentCounts.push({
            name: stateName,
            count: stateIncidentCount,
            newCount: 0,
        });

        stateCitiesData.sort((a, b) => (a.count > b.count ? -1 : 1));

        citiesIncidentsByState[slugify(stateName)] = {
            name: stateName,
            count: stateIncidentCount,
            cities: stateCitiesData,
        };
    }

    stateIncidentCounts.sort((a, b) => (a.count > b.count ? -1 : 1));
    incidents.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return {
        isLoading: false,
        totalIncidents,
        stateIncidentCounts,
        citiesIncidentsByState,
        incidentCountByMonth: getIncidentCountbyMonth(incidents),
    };
}

export function DataProvider(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;
    const [state, setState] = React.useState<IDataContext>({
        isLoading: true,
        totalIncidents: 0,
        stateIncidentCounts: [],
        citiesIncidentsByState: {},
        incidentCountByMonth: {},
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
