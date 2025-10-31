export const coordsToLatLng = (coords: GeolocationCoordinates): google.maps.LatLngLiteral => {
    return {
        lat: coords.latitude,
        lng: coords.longitude
    }
}  

export const isWithinBounds = (user: google.maps.LatLngLiteral, target: google.maps.LatLngLiteral, radius: number) => {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(target, user);
    return distance <= radius;
}