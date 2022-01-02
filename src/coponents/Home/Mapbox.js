import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pcnVsLWhvc2FpbiIsImEiOiJja3YwZzhzb3EwaGY2MnJscDZwNWY0cjI4In0.FGWI678fi4DiYa9aVv1jXg';

const Mapbox = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [89.651970, 23.754080],
            zoom: 14
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div style={{ position: 'relative', marginBottom: '400px' }}>
            <div id="map"></div>
        </div>
    );
};

export default Mapbox;