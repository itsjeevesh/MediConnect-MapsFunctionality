import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

// 🔹 Custom Icons
const userIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// 🚀 New Custom Kendra Icon
const kendraIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // Update this with your icon URL
  iconSize: [32, 32], // Adjust icon size
  iconAnchor: [16, 32], // Center the anchor point
  popupAnchor: [0, -30],
});

// 🔹 Hardcoded Jan Aushadhi Kendras
const kendras = [
  { id: 1, name: "Jan Aushadhi Kendra - T Nagar", latitude: 13.0416, longitude: 80.2333 },
  { id: 2, name: "Jan Aushadhi Kendra - Velachery", latitude: 12.9784, longitude: 80.2184 },
  { id: 3, name: "Jan Aushadhi Kendra - Anna Nagar", latitude: 13.0863, longitude: 80.2134 },
  { id: 4, name: "Jan Aushadhi Kendra - Adyar", latitude: 13.0067, longitude: 80.2576 },
  { id: 5, name: "Jan Aushadhi Kendra - Tambaram", latitude: 12.9229, longitude: 80.1275 },
];

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKendras, setFilteredKendras] = useState(kendras);
  const mapRef = useRef(null);

  // 🔹 Get User's Location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error getting location", error)
      );
    }
  }, []);

  // 🔹 Search Functionality
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredKendras(kendras);
    } else {
      setFilteredKendras(
        kendras.filter((kendra) =>
          kendra.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Kendra..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
      />
      
      <MapContainer
        center={userLocation || [13.0827, 80.2707]} // Default to Chennai
        zoom={12}
        style={{ height: "500px", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 🔹 User's Current Location Marker */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here!</Popup>
          </Marker>
        )}

        {/* 🔹 Display Filtered Kendras with New Icon */}
        {filteredKendras.map((kendra) => (
          <Marker key={kendra.id} position={[kendra.latitude, kendra.longitude]} icon={kendraIcon}>
            <Popup>
              {kendra.name} <br />
              <button onClick={() => showRoute(userLocation, kendra, mapRef.current)}>Get Directions</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// 🔹 Function to Show Directions
const showRoute = (userLocation, kendra, map) => {
  if (!userLocation || !map) return;

  L.Routing.control({
    waypoints: [
      L.latLng(userLocation.lat, userLocation.lng),
      L.latLng(kendra.latitude, kendra.longitude)
    ],
    routeWhileDragging: true
  }).addTo(map);
};

export default MapComponent;
