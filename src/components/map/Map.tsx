import * as React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import * as Styled from './Map.styled';
import { useMap } from './useMap';
import { stateCoordinates } from './state-coordinates';
import { Coordinate } from '../../models/Coordinate';

function getDistance(coordinate1: Coordinate, coordinate2: Coordinate): number {
    const latDiff = Math.abs(coordinate1[0] - coordinate2[0]);
    const lngDiff = Math.abs(coordinate1[1] - coordinate2[1]);

    return latDiff + lngDiff;
}

function findClosestState(coordinate: Coordinate): string {
    let closestStateName = '';
    let distance = 0;

    for (const stateName in stateCoordinates) {
        const stateDistance = getDistance(coordinate, stateCoordinates[stateName]);
        if (!closestStateName || distance > stateDistance) {
            closestStateName = stateName;
            distance = stateDistance;
        }
    }

    return closestStateName;
}

function isDesktop(): boolean {
    return window.innerWidth > 1200;
}

function resetMap(map: Microsoft.Maps.Map | undefined): void {
    map?.setView({
        center: new Microsoft.Maps.Location(isDesktop() ? 40 : 35, isDesktop() ? -105 : -95),
        zoom: isDesktop() ? 5 : 3,
    });
}

export function Map(): React.ReactElement {
    const { push } = useHistory();
    const { search } = useLocation();
    const { state } = useParams();

    const map = useMap('map', (coordinate, zoom) => {
        if (isDesktop() && zoom < 7) return;
        if (!isDesktop() && zoom < 6) return;

        const closestState = findClosestState(coordinate);
        push(`/states/${closestState}?focus=false`);
    });

    React.useEffect(() => {
        if (!state) return resetMap(map);

        const latLng = stateCoordinates[state];
        if (!latLng) return resetMap(map);

        if (search.indexOf('focus=false') > -1) return;

        map?.setView({
            center: new Microsoft.Maps.Location(
                isDesktop() ? latLng[0] : latLng[0] - 1,
                isDesktop() ? latLng[1] - 2 : latLng[1]
            ),
            zoom: isDesktop() ? 7 : 6,
        });
    }, [state]);

    return <Styled.Root id="map" />;
}
