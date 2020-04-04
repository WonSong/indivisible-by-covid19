/// <reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { useRef, useEffect } from 'react';
import { IData } from '../../models/IData';

async function fetchData(): Promise<IData> {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error('Failed to fetch data');

    return await response.json();
}

function createPins(data: IData): Promise<Microsoft.Maps.Pushpin[]> {
    return new Promise((resolve) => {
        const coordinates = [];

        for (const stateName in data) {
            const stateData = data[stateName];
            for (const cityName in stateData) {
                const cityData = stateData[cityName];

                coordinates.push({
                    coordinate: cityData.coordinate,
                    incidentCount: cityData.incidents.length,
                });
            }
        }

        const pins: Microsoft.Maps.Pushpin[] = coordinates.map(({ coordinate, incidentCount }) => {
            const radius = incidentCount * (window.innerWidth < 1200 ? 5 : 10);
            const minOpacity = 0.3;
            const opacity = 0.7 - incidentCount / 10;

            return new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(coordinate[0], coordinate[1]), {
                icon: `
                        <svg xmlns="http://www.w3.org/2000/svg" width="${radius * 2}" height="${radius * 2}">
                            <circle cx="${radius}" cy="${radius}" r="${radius}" fill="rgba(255,23,72, ${
                    minOpacity > opacity ? minOpacity : opacity
                })" />
                        </svg>`,
                anchor: new Microsoft.Maps.Point(radius, radius),
            });
        });

        resolve(pins);
    });
}

export function useMap(id: string): Microsoft.Maps.Map | undefined {
    const map = useRef<Microsoft.Maps.Map>();

    useEffect(() => {
        const element = document.getElementById(id);
        if (!element) return;

        const interval = setInterval(() => {
            if (!Microsoft.Maps) return;

            const usBounds = Microsoft.Maps.LocationRect.fromLocations(
                new Microsoft.Maps.Location(25.146013259887695, -139.79075622558594),
                new Microsoft.Maps.Location(49.384357452392578, -66.97039794921875)
            );

            map.current = new Microsoft.Maps.Map(element, {
                mapTypeId: Microsoft.Maps.MapTypeId.grayscale,
                supportedMapTypes: [],
                zoom: window.innerWidth > 1200 ? 5 : 3,
                showMapTypeSelector: false,
                showZoomButtons: false,
                maxBounds: usBounds,
                disableScrollWheelZoom: true,
                showLocateMeButton: false,
                disableZooming: true,
                disablePanning: true,
            });

            Microsoft.Maps.loadModule('Microsoft.Maps.Clustering', () => {
                fetchData()
                    .then(createPins)
                    .then((pins) => {
                        map.current.entities.push(pins);
                    });
            });

            clearInterval(interval);
        }, 100);
    }, [id]);

    return map.current;
}
