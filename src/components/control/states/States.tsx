import * as React from 'react';
import * as Styled from './States.styled';
import { StateButton } from './state-button';
import { DataContext } from '../../data-provider/DataContext';
import { IStateIncidentCount } from '../../../models/IDataContext';

export function States(): React.ReactElement {
    const { stateIncidentCounts } = React.useContext(DataContext);

    return (
        <Styled.Root>
            {stateIncidentCounts.map((state: IStateIncidentCount) => (
                <StateButton {...state} key={state.name} />
            ))}
        </Styled.Root>
    );
}
