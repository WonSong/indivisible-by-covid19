import * as React from 'react';
import * as Styled from './TotalREported.styled';
import { DataContext } from '../../data-provider/DataContext';
import { IData } from '../../../models/IData';

export function TotalReported(): React.ReactElement {
    const data: IData = React.useContext(DataContext);
    const totalIncidents = React.useMemo(() => {
        let val = 0;

        for (const stateName in data) {
            const stateData = data[stateName];
            for (const cityName in stateData) {
                const cityData = stateData[cityName];

                val += cityData.incidents.length;
            }
        }

        return val;
    }, [data]);

    return <Styled.Root>{totalIncidents}</Styled.Root>;
}
