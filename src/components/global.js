function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
}
getLocation()
