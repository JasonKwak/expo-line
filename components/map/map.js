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

    const markerIcon = new L.Icon({
        iconUrl: 'logo.png',
        iconSize: [25,25],
        iconAnchor: [10, 10]
    })

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {kinggeorge.map( (station, index) => <Marker
                position={[station.lat, station.lng]}
                icon={markerIcon}
                >
                    <Popup>
                        {kinggeorge[index].station} Station
                    </Popup>
                </Marker>
            )}
            
            {productionway.map( (station, index) => <Marker
                position={[station.lat, station.lng]}
                icon={markerIcon}>
                    <Popup>
                        {productionway[index].station} Station
                    </Popup>
                </Marker>
            )}

            <Polyline pathOptions={blueOption} positions={productionway}></Polyline>

            <Polyline pathOptions={blueOption} positions = {kinggeorge}></Polyline>


        </MapContainer>
    )
}