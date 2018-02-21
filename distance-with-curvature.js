// point 1
const geocodeFromRoppongiHills = { latitude: 35.6817124, longitude: 139.7166117 };
const geocodeFromAkihabara = { latitude: 35.7022077, longitude: 139.7722703 };

function getDistance (geocodeA, geocodeB) {
  // point 1
  const between2parallels = 111.3; // unit: km
  const between2meridians = 71.5; // unit: km

  const rad = 0.01745; // 1° = π/180 rad ≈ 0.01745
  const lat = (geocodeA.latitude - geocodeB.latitude) / 2 * rad;

  // point 2
  const dx = between2meridians * Math.cos(lat)  * (geocodeA.longitude - geocodeB.longitude);
  const dy = between2parallels * (geocodeA.latitude - geocodeB.latitude);

  // point 3
  return Math.sqrt((dx * dx) + (dy * dy));
}


// point 2
const distanceInCentimeter = getDistance (
     geocodeFromRoppongiHills, 
     geocodeFromAkihabara
);

// point 3
console.log (distanceInCentimeter);

