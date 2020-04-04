import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Map } from './components/map';
import { Control } from './components/control';
import { DataProvider } from './components/data-provider';
import { Panel } from './components/panel';

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <DataProvider>
                <Route path="/:route?/:state?">
                    <Map />
                    <Control />
                    <Route path="/about" component={Panel} />
                    <div id="bg"></div>
                </Route>
            </DataProvider>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById('app'));
