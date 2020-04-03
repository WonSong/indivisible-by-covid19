import * as React from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Map.styled';
import { useMap } from './useMap';

export const LatLng = {
    'new-york': {
        lat: 43,
        lng: -75,
    },
    washington: {
        lat: 47.5,
        lng: -121.5,
    },
    california: {
        lat: 37,
        lng: -120,
    },
};

export function Map(): React.ReactElement {
    const { state } = useParams();
    const map = useMap('map');

    React.useEffect(() => {
        const latLng = LatLng[state];

        if (!state || !latLng) {
            map?.setView({
                zoom: window.innerWidth > 1200 ? 5 : 3,
            });

            return;
        }

        map?.setView({
            center: new Microsoft.Maps.Location(latLng.lat, latLng.lng),
            zoom: window.innerWidth > 1200 ? 7 : 5,
        });
    }, [state]);

    return <Styled.Root id="map" />;
}
