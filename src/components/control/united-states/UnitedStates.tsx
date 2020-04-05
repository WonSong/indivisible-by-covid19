import * as React from 'react';
import { States } from '../states';
import { Heading, Heading2 } from '../../heading';
import { Section } from '../../section';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { DataContext } from '../../data-provider/DataContext';
import { MainFigure } from '../main-figure';
import { TrendChart } from '../trend-chart';
import { Content } from '../Content';

export function UnitedStates(): React.ReactElement {
    useDarkerBackgroundOnScroll();

    const { totalIncidents, isLoading } = React.useContext(DataContext);

    return (
        <>
            <Section>
                <Heading>United States</Heading>
                <MainFigure>{totalIncidents}</MainFigure>
            </Section>

            <Content>
                <Section>
                    <Heading2>Trend in 2020</Heading2>
                    <TrendChart />
                </Section>

                <Heading2>By state</Heading2>
                <States />
            </Content>
        </>
    );
}
