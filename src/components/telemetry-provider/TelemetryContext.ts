import { createContext } from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const TelemetryContext = createContext<ApplicationInsights>({});
