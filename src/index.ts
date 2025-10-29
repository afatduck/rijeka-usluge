// Entry point — runs when the app loads

// You can import global styles if you want
import "./styles/main.css";

// Grab your API key (loaded via dotenv-webpack at build time)
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
  console.warn("⚠️ Google Maps API key is missing! Check your .env file.");
}

// Create a root element for your app
const app = document.getElementById("app");

if (app) {
  const heading = document.createElement("h1");
  heading.textContent = "Hello, Webpack + TypeScript 👋";
  app.appendChild(heading);

  const mapContainer = document.createElement("div");
  mapContainer.id = "map";
  mapContainer.style.width = "100%";
  mapContainer.style.height = "400px";
  mapContainer.style.marginTop = "1rem";
  app.appendChild(mapContainer);

  // Dynamically load the Google Maps script
  if (GOOGLE_MAPS_API_KEY) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
  }
}

// Define a global callback for Google Maps
// @ts-ignore
window.initMap = () => {
  // @ts-ignore
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // San Francisco, for example
    zoom: 10,
  });

  // @ts-ignore
  new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 },
    map,
    title: "Hello from SF!",
  });
};
