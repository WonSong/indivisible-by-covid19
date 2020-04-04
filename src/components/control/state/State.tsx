import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Styled from './State.styled';
import { Heading, Heading2 } from '../../heading';
import { DataContext } from '../../data-provider/DataContext';
import { IIncident } from '../../../models/IData';
import { Incident } from './incident';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { ICitiesIncidents } from '../../../models/IDataContext';
import { Section } from '../../section';
import { MainFigure } from '../main-figure';

export function State(): React.ReactElement | null {
    useDarkerBackgroundOnScroll();
    const { replace } = useHistory();
    const { state } = useParams();
    const { citiesIncidentsByState } = React.useContext(DataContext);

    if (!state) {
        replace('/');

        return null;
    }

    const data = citiesIncidentsByState[state];
    if (!data) {
        replace('/');

        return null;
    }

    return (
        <>
            <Styled.Back to="/">Back to United States</Styled.Back>

            <Section>
                <Heading>{data.name}</Heading>
                <MainFigure>{data.count}</MainFigure>
            </Section>

            <Heading>Incidents</Heading>
            <Styled.Incidents>
                {data?.cities.map((city: ICitiesIncidents) => (
                    <div key={city.name}>
                        <Heading2>
                            {city.name} ({city.count})
                        </Heading2>
                        {city.incidents.map((incident: IIncident) => (
                            <Incident key={incident.link} incident={incident} />
                        ))}
                    </div>
                ))}
            </Styled.Incidents>
        </>
    );
}
