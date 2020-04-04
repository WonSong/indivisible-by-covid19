import * as React from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Map.styled';
import { useMap } from './useMap';

export const LatLng = {
    'new-york': [43, -74],
    washington: [47.5, -121.5],
    california: [37, -120],
    'new-mexico': [34, -107],
    illinois: [40, -89],
    florida: [27.1, -81.6],
    'washington-dc': [38.904722, -79.016389],
    wisconsin: [44.5, -89.5],
    texas: [31, -100],
    indiana: [40, -86],
    minnesota: [46, -96],
    colorado: [39, -107.5],
    virginia: [38, -79],
    pennsylvania: [41, -77.5],
    'new-jersey': [40, -74.5],
    nevada: [39, -117],
    utah: [39, -111],
};

export function Map(): React.ReactElement {
    const { state } = useParams();
    const map = useMap('map');

    React.useEffect(() => {
        const latLng = LatLng[state];

        if (!state || !latLng) {
            map?.setView({
                center: new Microsoft.Maps.Location(
                    window.innerWidth > 1200 ? 40 : 35,
                    window.innerWidth > 1200 ? -105 : -95
                ),
                zoom: window.innerWidth > 1200 ? 5 : 3,
            });

            return;
        }

        map?.setView({
            center: new Microsoft.Maps.Location(
                window.innerWidth > 1200 ? latLng[0] : latLng[0] - 2,
                window.innerWidth > 1200 ? latLng[1] - 2 : latLng[1]
            ),
            zoom: window.innerWidth > 1200 ? 7 : 5,
        });
    }, [state]);

    return <Styled.Root id="map" />;
}
