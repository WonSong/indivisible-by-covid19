import * as React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { TelemetryContext } from './TelemetryContext';

export function TelemetryProvider(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;
    const [ai, setAi] = React.useState<ApplicationInsights>();

    React.useEffect(() => {
        const appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: 'c2bb408a-97c8-4594-96f5-ee9525018852',
            },
        });
        appInsights.loadAppInsights();

        setAi(appInsights);
    }, []);

    return <TelemetryContext.Provider value={ai}>{children}</TelemetryContext.Provider>;
}
