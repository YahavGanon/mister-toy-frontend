import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{fontSize:'3.5em'}}>{text}</div>;

export function GoogleMap() {
    const [coords, setCoords] = useState({ lat: 32.310390, lng: 34.857450 })
    const zoom = 11

    function handleClick({lat, lng}) {
        setCoords({lat, lng})
    }
    
    return (

        <div style={{ height: '40vh', width: '40%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD3R7f493EHddS6kDnBuhqVtvDKRLsI328" }}
                center={coords}
                defaultZoom={zoom}
                onClick={handleClick}
            >
                <AnyReactComponent
                    {...coords}
                    text="📌"
                />
            </GoogleMapReact>
        </div>
    );
}