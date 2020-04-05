import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Styled from './State.styled';
import { Heading, Heading2 } from '../../heading';
import { DataContext } from '../../data-provider/DataContext';
import { Incident } from './incident';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { IStateIncident } from '../../../models/IDataContext';
import { Section } from '../../section';
import { MainFigure } from '../main-figure';
import { Content } from '../Content';

const contentCountStep = 10;

export function State(): React.ReactElement | null {
    useDarkerBackgroundOnScroll();

    const { replace } = useHistory();
    const { state } = useParams();
    const { incidentsByState } = React.useContext(DataContext);
    const [contentCount, setContentCount] = React.useState<number>(contentCountStep);

    if (!state) {
        replace('/');

        return null;
    }

    const data = incidentsByState[state];
    if (!data) {
        replace('/');

        return null;
    }

    const incidentsForView =
        data.incidents.length <= contentCount ? [...data.incidents] : data.incidents.slice(0, contentCount);

    const handleLoadMoreButtonPressed = (): void => {
        setContentCount((p) => p + contentCountStep);
    };

    return (
        <>
            <Styled.Back to="/">Back to United States</Styled.Back>

            <Section>
                <Heading>{data.stateName}</Heading>
                <MainFigure>{data.incidents.length}</MainFigure>
            </Section>

            <Content margin={40}>
                <Heading2>Incidents</Heading2>

                <Styled.Incidents>
                    {incidentsForView.map((incident: IStateIncident) => (
                        <Incident key={incident.link} incident={incident} />
                    ))}

                    {contentCount < data.incidents.length && (
                        <Styled.LoadMoreButton onClick={handleLoadMoreButtonPressed}>Load more</Styled.LoadMoreButton>
                    )}
                </Styled.Incidents>
            </Content>
        </>
    );
}
