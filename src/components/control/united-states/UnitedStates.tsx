import * as React from 'react';
import { TotalReported } from '../total-reported';
import { States } from '../states';
import { Heading } from '../../heading';

export function UnitedStates(): React.ReactElement {
    return (
        <>
            <Heading>Hate crimes reported in US</Heading>
            <TotalReported />

            <Heading>By state</Heading>
            <States />
        </>
    );
}
