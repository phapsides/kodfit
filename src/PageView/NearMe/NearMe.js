import React, { useState, useEffect } from "react";
import "./NearMe.css";
import Map from "./Map/Map";

export default function NearMe() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 });
  const [query, setQuery] = useState("gym");
  const [title, setTitle] = useState("Gyms");
  let endpoint = "https://discover.search.hereapi.com/v1/discover";
  let queryParams = `at=${location.lat},${location.lng}&q=${query}&limit=15`;
  let apiKEy = "apiKey=bYn1_nn2_CYDA29oVvcibuL4otpQL3F0HIF5aBnlcW4";

  useEffect(() => {
    let successPosition = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };
    let errorHandle = () => setLocation({ lat: 51.5007, lng: -0.1246 });
    navigator.geolocation.getCurrentPosition(successPosition, errorHandle);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${endpoint}?${queryParams}&${apiKEy}`);
      const result = await response.json();
      setData(result.items);
    })();
  }, [queryParams]);

  const updateQuery = (query, title) => {
    setQuery(query);
    setTitle(title);
  };
  
  return (
    <div className="NearMe">
      <div className="containerOne">
        <Map className="map" data={data} location={location} />

        <div className="list-and-buttons">
          <div className="switch-buttons">
            <button
              className="toggleQuery"
              onClick={() => updateQuery("gym", "Gyms")}
            >
              Find your nearest gym
            </button>
            <button
              className="toggleQuery"
              onClick={() =>
                updateQuery("personal+trainer", "Personal Trainers")
              }
            >
              Find your nearest personal trainer
            </button>
          </div>
          <div className="list containerOne-content">
            <h3 className="listTitle">List of {title}</h3>
            <ul className="listContent">
              {data &&
                data.map((gym, index) => (
                  <li key={gym.title} className="listContent-item">
                    {index + 1}. {gym.title}
                    <br />
                    {gym.distance && `Distance: ${gym.distance}m`}
                    <br />
                    {gym.contacts &&
                      `Contact: ${gym.contacts[0].phone[0].value}`}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
