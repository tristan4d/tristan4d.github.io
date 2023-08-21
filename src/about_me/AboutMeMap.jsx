import { useState, useMemo, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './AboutMeMap.css'

export default function AboutMeMap({ value, locations, center, handleChange, min_500 }) {
    const [map, setMap] = useState(null)

    const updateCenter = useCallback(() => {
        if (map) {
            map.setView([locations[value].lat, locations[value].lng], map.getZoom(), {
                animate: true
            })
        }
    })

    useEffect(() => {
        updateCenter();
    }, [map, value])

    const displayMap = useMemo(
        () => (
            <MapContainer
                className='MapContainer'
                style={{ width: min_500 ? '30vw' : '75vw' }}
                center={center}
                zoom={5}
                scrollWheelZoom={false}
                ref={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map(location => {
                    return <Marker
                        key={location.id}
                        position={[location.lat, location.lng]}
                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                        eventHandlers={{
                            click: (e) => {
                                handleChange(e, location.id)
                            }
                        }}
                    >
                        {value === location.id && (<Tooltip permanent><b>{location.city}</b><br />{location.tooltip}</Tooltip>)}
                        {value !== location.id && (<Tooltip><b>{location.city}</b><br />{location.tooltip}</Tooltip>)}
                    </Marker>
                })}
            </MapContainer>
        ),
        [value],
    )

    return (
        <div>
            {displayMap}
        </div>
    )
}