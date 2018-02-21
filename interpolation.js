function isGeocodeEqual (geocodeA, geocodeB) {
  return geocodeA.latitude === geocodeB.latitude && 
         geocodeA.longitude === geocodeB.longitude;
}

function getDistance (geocodeA, geocodeB) {
  const between2parallels = 111.3; // unit: km
  const between2meridians = 71.5; // unit: km

  const dx = between2meridians * (geocodeA.longitude - geocodeB.longitude);
  const dy = between2parallels * (geocodeA.latitude - geocodeB.latitude);

  return Math.sqrt((dx * dx) + (dy * dy));
}

function getAverageDistance (geocode, listOfGeocodes) {
  let totalDifference = 0;
  for (let i = 0; i < listOfGeocodes.length; i += 1) {
      totalDifference += getDistance(geocode, listOfGeocodes[i]);
  }
  return totalDifference /= listOfGeocodes.length;
}

function getCityCentry (listOfGeocodes) {
  let geocodeCodeIndex = 0;
  let averageDistance = null;

  for (let i = 0; i <listOfGeocodes.length; i += 1) {
    const localAverageDistance = getAverageDistance (
      listOfGeocodes [i],
      listOfGeocodes.filter (geocode => !isGeocodeEqual (geocode, listOfGeocodes [i])));

    if (averageDistance === null || averageDistance > localAverageDistance) {
      averageDistance = localAverageDistance;
      geocodeCodeIndex = i;
    }
  }
  return Object.assign ({}, listOfGeocodes [geocodeCodeIndex]);
}

// your geocode-list
const listOfGeocodes = [
  { latitude: 35.6817124, longitude: 139.7166117 },
  { latitude: 35.7022077, longitude: 139.7722703 },
  { latitude: 36.5022077, longitude: 137.7722703 },
];

console.log(getCityCentry(listOfGeocodes))