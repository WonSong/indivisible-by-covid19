import * as React from 'react';
import { TotalReported } from '../total-reported';
import { States } from '../states';
import { Heading } from '../../heading';
import { useDarkerBackgroundOnScroll } from '../../../hooks/useDarkerBackgroundOnScroll';

export function UnitedStates(): React.ReactElement {
    useDarkerBackgroundOnScroll();

    return (
        <>
            <Heading>Hate crimes reported in US</Heading>
            <TotalReported />

            <Heading>By state</Heading>
            <States />
        </>
    );
}
