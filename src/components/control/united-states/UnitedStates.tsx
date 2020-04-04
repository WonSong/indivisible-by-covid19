import * as React from 'react';
import { States } from '../states';
import { Heading } from '../../heading';
import { Section } from '../../section';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { DataContext } from '../../data-provider/DataContext';
import { MainFigure } from '../main-figure';

export function UnitedStates(): React.ReactElement {
    useDarkerBackgroundOnScroll();

    const { totalIncidents, isLoading } = React.useContext(DataContext);

    return (
        <>
            <Section>
                <Heading>United States</Heading>
                <MainFigure>{totalIncidents}</MainFigure>
            </Section>

            <Heading>By state</Heading>
            <States />
        </>
    );
}
