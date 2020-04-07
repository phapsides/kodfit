import React from 'react';
import './NearMeGyms.css';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import Location from './Location.js';


export default function NearMeGyms() {
    return (
        <div className="NearMeGyms">
            <div className="containerOne">
                <div className="map containerOne-content">
                    <LoadScript
                        id='load-script'
                        googleMapsApiKey='AIzaSyDJafHKT_k97cPZ826in74GF-yIV_ww7Hk'
                    >
                        <GoogleMap
                            id='map'
                            zoom={12}
                            center={{ 
                                lat: 51.5074, 
                                lng: 0.1278 
                            }}
                            mapContainerClassName='map'
                        >
                        </GoogleMap>
                    </LoadScript>
                    <Location />
                </div>
                <div className="list containerOne-content">
                    <h3 className="listTitle">List of Gyms</h3>
                    <ul className="listContent">
                        <li className="listContent-item">gym A</li>
                        <li className="listContent-item">gym B</li>
                        <li className="listContent-item">gym C</li>
                        <li className="listContent-item">gym D</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
