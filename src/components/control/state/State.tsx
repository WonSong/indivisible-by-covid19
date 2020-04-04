import * as React from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './State.styled';
import { Heading, Heading2 } from '../../heading';
import { DataContext } from '../../data-provider/DataContext';
import { IData, IIncident } from '../../../models/IData';
import { slugify } from '../../../utils/slugify';
import { Incident } from './incident';

export function State(): React.ReactElement | null {
    const { state } = useParams();
    const data: IData = React.useContext(DataContext);

    const viewData = React.useMemo(() => {
        let name: string | null = null;
        let incidentsCount = 0;
        const cities: { name: string; incidents: IIncident[]; count: number }[] = [];

        for (const stateName in data) {
            if (slugify(stateName) === state) {
                name = stateName;

                break;
            }
        }

        if (!name) return;

        for (const cityName in data[name]) {
            const cityData = data[name][cityName];

            incidentsCount += cityData.incidents.length;
            cities.push({
                name: cityName,
                incidents: cityData.incidents,
                count: cityData.incidents.length,
            });
        }

        cities.sort((a, b) => (a.count > b.count ? -1 : 1));

        return {
            name,
            cities,
            incidentsCount,
        };
    }, [state, data]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Styled.Back to="/">Back to home</Styled.Back>

            <Heading>Hate crimes reported in {viewData?.name}</Heading>
            <Styled.Reported>{viewData?.incidentsCount}</Styled.Reported>

            <Heading>Incidents</Heading>
            <Styled.Incidents>
                {viewData?.cities.map((city) => (
                    <>
                        <Heading2>
                            {city.name} ({city.incidents.length})
                        </Heading2>
                        {city.incidents.map((incident: IIncident) => (
                            <Incident key={incident.link} incident={incident} />
                        ))}
                    </>
                ))}
            </Styled.Incidents>
        </>
    );
}
