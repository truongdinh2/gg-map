import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';


export default function GooM() {
    const LocationMarker = () => {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                console.log(e)
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom(10))
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }
    // const position = [21.04, 105.79];
    return (
        <MapContainer
            center={[21.04, 105.79]}
            zoom={5}
            style={{ height: "100vh", width: "100%" }}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; 
                    <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            <LocationMarker />
        </MapContainer>
    )
}
