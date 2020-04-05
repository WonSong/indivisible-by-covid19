import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Styled from './State.styled';
import { Heading, Heading2 } from '../../heading';
import { DataContext } from '../../data-provider/DataContext';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { Section } from '../../section';
import { MainFigure } from '../main-figure';
import { Content } from '../Content';
import { IncidentList } from '../incident-list';

export function State(): React.ReactElement | null {
    useDarkerBackgroundOnScroll();

    const { replace } = useHistory();
    const { state } = useParams();
    const { incidentsByState } = React.useContext(DataContext);

    if (!state) {
        replace('/');

        return null;
    }

    const data = incidentsByState[state];
    if (!data) {
        replace('/');

        return null;
    }

    return (
        <>
            <Styled.Back to="/">Back to United States</Styled.Back>

            <Section>
                <Heading>{data.stateName}</Heading>
                <MainFigure>{data.incidents.length}</MainFigure>
            </Section>

            <Content margin={40}>
                <Heading2>Incidents</Heading2>

                <IncidentList pageSize={5} incidents={data.incidents} />
            </Content>
        </>
    );
}
