import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Map } from './components/map';
import { Control } from './components/control';
import { DataProvider } from './components/data-provider';
import { TelemetryProvider } from './components/telemetry-provider/TelemetryProvider';

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <TelemetryProvider>
                <DataProvider>
                    <Route path="/:route?/:state?">
                        <Map />
                        <Control />
                        <div id="bg"></div>
                    </Route>
                </DataProvider>
            </TelemetryProvider>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById('app'));
