import * as React from 'react';
import { IData } from '../../models/IData';
import { DataContext } from './DataContext';

export function DataProvider(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;
    const [state, setState] = React.useState<IData>({});

    React.useEffect(() => {
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch data');

                return response.json();
            })
            .then(setState);
    }, []);

    return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}
