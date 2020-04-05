import * as React from 'react';
import { States } from '../states';
import { Heading, Heading2 } from '../../heading';
import { Section } from '../../section';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { DataContext } from '../../data-provider/DataContext';
import { MainFigure } from '../main-figure';
import { TrendChart } from '../trend-chart';
import { Content } from '../Content';
import { IncidentList } from '../incident-list';

export function UnitedStates(): React.ReactElement {
    useDarkerBackgroundOnScroll();

    const { totalIncidents, isLoading, incidents } = React.useContext(DataContext);

    return (
        <>
            <Section>
                <Heading>United States</Heading>
                <MainFigure>{totalIncidents}</MainFigure>
            </Section>

            <Content margin={10}>
                <Section>
                    <Heading2>Trend</Heading2>
                    <TrendChart />
                </Section>

                <Section>
                    <Heading2>Latest incidents</Heading2>
                    <IncidentList pageSize={3} incidents={incidents} />
                </Section>

                <Heading2>States</Heading2>
                <States />
            </Content>
        </>
    );
}
