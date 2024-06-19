const map = L.map('map').setView([20, 0], 2);

// Load and style the map with additional color adjustments
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    className: 'sepia-map',
    maxZoom: 19
}).addTo(map);

// Define conflict regions and their summaries
const conflictRegions = [
    {
        name: "Ukraine/Russia",
        coordinates: [48.3794, 31.1656],
        summary: "Summary of Ukraine/Russia conflict.",
        detailsLink: "details/ukraine-russia.html"
    },
    {
        name: "Israel/Gaza",
        coordinates: [31.0461, 34.8516],
        summary: "Summary of Israel/Gaza conflict.",
        detailsLink: "details/israel-gaza.html"
    },
    {
        name: "Taiwan",
        coordinates: [23.6978, 120.9605],
        summary: "Summary of Taiwan conflict.",
        detailsLink: "details/taiwan.html"
    }
];

// Add conflict regions to the map
conflictRegions.forEach(region => {
    L.circleMarker(region.coordinates, {
        color: '#8B0000', // Pastel dark red
        radius: 10,
        fillColor: '#8B0000',
        fillOpacity: 0.6
    }).addTo(map)
      .bindPopup(`<b>${region.name}</b><br>${region.summary}<br><a href="${region.detailsLink}">More details</a>`);
});
