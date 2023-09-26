import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';
import Coordinates from './components/Coordinates';
import ISSLocation from './components/ISSLocation';
import './App.css'

type Location = {
  latitude: number;
  longitude: number;
};

function App() {
  const [issLocation, setIssLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setIssLocation(data)
      setLoading(false);
    }
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);
    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
  }, [])

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
      <>
    <h1>International Space Station Location Tracker</h1>
    {issLocation && (
      <div className="App">
         <Coordinates
         latitude={issLocation.latitude}
         longitude={issLocation.longitude}
       />
       <ISSLocation
       latitude={issLocation.latitude}
       longitude={issLocation.longitude}
     />
     </div>
    )}
  </>
  );
}

export default App;
