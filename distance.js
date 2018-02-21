const fetchUrl = require('fetch').fetchUrl;

class Geocoder {
  loadGeocode(address, apiKey) {
    fetchUrl(`https://maps.googleapis.com/maps/api/geocode/json` +     
              `?key=${apiKey}&address=${address}`, 
              (error, meta, body) => {console.log(body.toString('utf-8'));});
  }
}

// google maps api key
const googleApiKey = 'AIzaSyB9O71kQplbsqJwgYvqr-N0ZsoK5vNRVnc';

// address for geocoding
const address = 'Solingen Gruenstr. 4 Germany';

(new Geocoder()).loadGeocode(address, googleApiKey);
