import * as React from 'react';
import * as Styled from './States.styled';
import { StateButton } from './state-button';
import { IData, IStateData } from '../../../models/IData';
import { DataContext } from '../../data-provider/DataContext';

export function States(): React.ReactElement {
    const data: IData = React.useContext(DataContext);

    const states = React.useMemo(() => {
        const result: { name: string; data: IStateData; count: number }[] = [];

        for (const stateName in data) {
            let incidentCount = 0;
            const stateData = data[stateName];

            for (const cityName in stateData) {
                const cityData = stateData[cityName];
                incidentCount += cityData.incidents.length;
            }

            result.push({
                name: stateName,
                data: stateData,
                count: incidentCount,
            });
        }

        result.sort((a, b) => (a.count < b.count ? 1 : -1));

        return result;
    }, [data]);

    return (
        <Styled.Root>
            {states.map((state) => (
                <StateButton {...state} key={state.name} />
            ))}
        </Styled.Root>
    );
}
