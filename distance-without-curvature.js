const geocodeFromRoppongiHills = { latitude: 35.6817124, longitude: 139.7166117 };
const geocodeFromAkihabara = { latitude: 35.7022077, longitude: 139.7722703 };

function getDistance (geocodeA, geocodeB) {
  const between2parallels = 111.3; // unit: km
  const between2meridians = 71.5; // unit: km

  const dx = between2meridians * (geocodeA.longitude - geocodeB.longitude);
  const dy = between2parallels * (geocodeA.latitude - geocodeB.latitude);

  return Math.sqrt((dx * dx) + (dy * dy));
}

const distanceInCentimeter = getDistance(
     geocodeFromRoppongiHills, 
     geocodeFromAkihabara
);

// point 3
console.log (distanceInCentimeter);
