// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12.9716, lng: 77.5946 }, // Default coordinates (Bengaluru)
        zoom: 12,
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Center the map on the user's location
                map.setCenter(userLocation);

                // Create a marker for the user's location
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location',
                });

                // Search for the nearest EV charger using Google Places API
                searchNearestCharger(userLocation, map);
            },
            () => {
                handleLocationError(true, map);
            }
        );
    } else {
        handleLocationError(false, map);
    }
}

function handleLocationError(browserHasGeolocation, map) {
    const errorMsg = browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : 'Error: Your browser doesn\'t support geolocation.';
    console.error(errorMsg);
}

// Function to search for the nearest EV charger using Google Places API
function searchNearestCharger(userLocation, map) {
    const service = new google.maps.places.PlacesService(map);
    
    const request = {
        location: userLocation,
        radius: '2000', // Search within a 2 km radius
        keyword: 'EV charger', // Keyword to search for EV chargers
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const nearestCharger = results[0];

            // Create a custom icon for the nearest EV charger
            const chargerIcon = {
                url: 'icon.png', // Replace with your icon URL
                scaledSize: new google.maps.Size(30, 30), // Set the size of the icon
            };

            // Create a marker for the nearest EV charger with the custom icon
            new google.maps.Marker({
                position: nearestCharger.geometry.location,
                map: map,
                title: nearestCharger.name, // Display the name of the charger
                icon: chargerIcon, // Set the custom icon
            });

            // Optionally, center the map on the nearest charger
            map.setCenter(nearestCharger.geometry.location);
        } else {
            console.error('Places API request failed due to ' + status);
        }
    });
}

window.onload = initMap;
