# MediConnect

MediConnect is a web application that helps users find affordable generic medicine alternatives by scanning medicine labels. It also provides the nearest **Jan Aushadhi Kendra** locations on a map and offers search and direction functionalities using free map APIs.

---

## 🚀 Features
- 📷 **Medicine Scanner** – Scan a medicine label and get cheaper generic alternatives.
- 🗺️ **Find Nearby Kendras** – Shows all hardcoded Jan Aushadhi Kendras in and around **Chennai**.
- 🔍 **Search Functionality** – Users can search for a specific Kendra.
- 📌 **Custom Kendra Icons** – Each Jan Aushadhi Kendra is marked with a **custom pharmacy icon**.
- 🚗 **Directions to Kendras** – Shows routes from the user's location to the selected Kendra.
- 🌍 **Uses Free Map API** – Avoids Google Maps API; utilizes free OpenStreetMap and Leaflet.

---

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Mapping Library:** Leaflet.js, React-Leaflet, Leaflet-Routing-Machine
- **Geolocation:** Browser API (Navigator.geolocation)

---

## 📥 Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
 git clone https://github.com/your-username/MediConnect.git
 cd MediConnect
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the Application**
```sh
npm start
```

The app will be available at **http://localhost:3000**.

---

## 📌 How to Add Custom Kendra Icons
1. Place your **custom pharmacy marker icon** inside the `public/icons/` folder.
2. Update the icon path in `MapComponent.js`:
   ```javascript
   const kendraIcon = new L.Icon({
       iconUrl: process.env.PUBLIC_URL + "/icons/kendra-icon.png",
       iconSize: [32, 32],
       iconAnchor: [16, 32],
       popupAnchor: [0, -30],
   });
   ```
3. Restart the app (`npm start`) to apply changes.

---

## 📍 Hardcoded Jan Aushadhi Kendras (Chennai)
| Kendra Name | Latitude | Longitude |
|-------------|----------|-----------|
| T Nagar | 13.0416 | 80.2333 |
| Velachery | 12.9784 | 80.2184 |
| Anna Nagar | 13.0863 | 80.2134 |
| Adyar | 13.0067 | 80.2576 |
| Tambaram | 12.9229 | 80.1275 |

---

## 💡 Future Enhancements
✅ **Dynamic Kendra Availability** (Green: Open, Red: Closed)  
✅ **User Input for Custom Kendras**  
✅ **Backend Integration for Live Medicine Prices**

---

## 📜 License
This project is open-source and  available under the MIT License.

---

## 🤝 Contributing
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit your changes and push them.
4. Open a **Pull Request**.
