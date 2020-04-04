import * as React from 'react';
import { States } from '../states';
import { Heading } from '../../heading';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';
import { DataContext } from '../../data-provider/DataContext';
import { MainFigure } from '../main-figure';

export function UnitedStates(): React.ReactElement {
    useDarkerBackgroundOnScroll();

    const { totalIncidents, isLoading } = React.useContext(DataContext);

    return (
        <>
            <Heading>Hate crimes reported in US</Heading>
            <MainFigure>{totalIncidents}</MainFigure>

            <Heading>By state</Heading>
            <States />
        </>
    );
}
