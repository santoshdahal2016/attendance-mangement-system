import { useGeolocated } from "react-geolocated";

function App() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

  return (

 
    <div className="App">
       {  !isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
  ) : coords ? (
      <table>
          <tbody>
              <tr>
                  <td>latitude</td>
                  <td>{coords.latitude}</td>
              </tr>
              <tr>
                  <td>longitude</td>
                  <td>{coords.longitude}</td>
              </tr>
             
          </tbody>
      </table>
  ) : (
      <div>Getting the location data&hellip; </div>
  )}
     
      
    </div>
  )
}

export default App
