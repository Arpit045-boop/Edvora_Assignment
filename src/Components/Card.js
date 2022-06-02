import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="row">
                <div className="col-lg-3">
                    <img className="map" src={props.map} alt=""></img>
                </div>
                <div className="col-lg-6">
                    <p className="ride_id">Ride id : {props.ride_id}</p>
                    <p className="origin_station">Origin station : {props.origin_station}</p>
                    <p className="station_path">Station path: {props.station_path}</p>
                    <p className="date">Date: {props.date}</p>
                    <p className="distance">Distance:{props.distance}</p>
                </div>
                <div className="col-lg-3">
                    <p>City: {props.city}</p>
                    <p>State: {props.state}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;