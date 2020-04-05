import { useEffect, useContext } from 'react';
import { TelemetryContext } from '../components/telemetry-provider/TelemetryContext';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export function useTrackPage(pageName: string): void {
    const appInsights: ApplicationInsights = useContext(TelemetryContext);

    useEffect(() => {
        appInsights?.startTrackPage(pageName);

        return (): void => {
            appInsights?.stopTrackPage(pageName);
        };
    }, [pageName]);
}
