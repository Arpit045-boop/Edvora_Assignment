import React, { useEffect, useState } from 'react';
import Card from './Card';
import Header from './Header';

function App() {

  const [ride, setRide] = useState([]);

  const getRide = async () => {
    const response = await fetch("https://assessment.api.vweb.app/rides");
    setRide(await response.json());
  }

  useEffect(() => {
    getRide();
  }, [])


  return (
    <>
      <Header />
      {
        ride.map((currentRide, index) => {
          return (<div>
            <Card
              map={currentRide.map_url}
              ride_id={currentRide.id}
              origin_station={currentRide.origin_station_code}
              station_path={currentRide.station_path}
              date={currentRide.date}
              distance={currentRide.distance}
              city={currentRide.city}
              state={currentRide.state}
            />
          </div>)

        })

      }

    </>
  );
}
export default App;
