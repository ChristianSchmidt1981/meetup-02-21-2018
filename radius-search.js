function getRadiusSearch(geocode, distanceInCm, listOfGeocodes) {
  const foundedGeocodes = [];

  for (let i = 0; i < listOfGeocodes.length; i += 1) {
    const distance = getDistance(geocode, listOfGeocodes[i]);

    if (distance <= distanceInCm) {
      foundedGeocodes.push(Object.assign({}, listOfGeocodes[i]));
    }
  }

  return foundedGeocodes;
}

function getDistance (geocodeA, geocodeB) {
  const between2parallels = 111.3; // unit: km
  const between2meridians = 71.5; // unit: km

  const dx = between2meridians * (geocodeA.longitude - geocodeB.longitude);
  const dy = between2parallels * (geocodeA.latitude - geocodeB.latitude);

  return Math.sqrt((dx * dx) + (dy * dy));
}

const listOfGeocodes = [
  { latitude: 35.6817124, longitude: 139.7166117 },
  { latitude: 35.7022077, longitude: 139.7722703 },
  { latitude: 36.5022077, longitude: 137.7722703 },
];
const distanceInCm = 40;
const geocode = { latitude: 35.3817124, longitude: 139.4166117 };

console.log(getRadiusSearch(geocode, distanceInCm, listOfGeocodes));