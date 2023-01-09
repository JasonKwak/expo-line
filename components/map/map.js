import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Home.module.css';
import {kinggeorge, productionway} from './stations.js';

import { MapContainer,
TileLayer,
Marker,
Popup,
Polyline,
CircleMarker } from 'react-leaflet';
import { polyline } from 'leaflet';

export default function Map(){
    const position = [49.28594, -123.11129];

    const blueOption = {color: 'blue'};

    // const polyline = [
    //     [49.28594, -123.11129],
    //     [49.28250, -123.11865],
    //     [49.27450, -123.12189],
    // ]

    // const kinggeorge = [
    //     [49.28594, -123.11129],
    //     [49.28565, -123.11985],
    //     [49.2832725, -123.1161375],
    //     [49.279406, -123.109358],
    //     [49.273151, -123.100467],
    //     [49.261893, -123.069099728],
    //     [49.248384, -123.05604],
    //     [49.244194, -123.045931],
    //     [49.23835, -123.031704],
    //     [49.22979, -123.012776],
    //     [49.225463, -123.003182],
    //     [49.220004, -122.988381],
    //     [49.212054, -122.959226],
    //     [49.200116, -122.948722],
    //     [49.201354, -122.912716],
    //     [49.20476, -122.906161],
    //     [49.20442, -122.874157],
    //     [49.198945, -122.850559],
    //     [49.189473, -122.847871],
    //     [49.1827, -122.8446]
    // ]

    // const productionway = [
    //     [49.20476, -122.906161],
    //     [49.22443, -122.88964],
    //     [49.23322, -122.88283],
    //     [49.24846, -122.89702],
    //     [49.25337, -122.91815]
    // ]


    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {kinggeorge.map( (station, index) => <Marker
                position={[station.lat, station.lng]}>
                    <Popup>
                        
                    </Popup>
                </Marker>
            )}


            {productionway.map( (station, index) => <Marker
                position={[station.lat, station.lng]}>
                    <Popup>
                        
                    </Popup>
                </Marker>
            )}

            {/* <CircleMarker center={[49.27450, -123.12189]} pathOptions={redOption} radius={20}>
                <Popup>
                    You reached your destination!
                </Popup>
            </CircleMarker> */}

            <Polyline pathOptions={blueOption} positions={productionway}></Polyline>

            <Polyline pathOptions={blueOption} positions = {kinggeorge}></Polyline>


        </MapContainer>
    )
}