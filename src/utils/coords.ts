export const coordsToLatLng = (coords: GeolocationCoordinates): google.maps.LatLngLiteral => {
    return {
        lat: coords.latitude,
        lng: coords.longitude
    }
}  