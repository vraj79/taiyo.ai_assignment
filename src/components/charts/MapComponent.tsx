import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchCasesData, setMapData } from "../../redux/actions";

const MapComponent: React.FC = () => {
  const { countryData } = useSelector((state: RootState) => state.case);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const casesData = await fetchCasesData(
        "https://disease.sh/v3/covid-19/countries"
      );
      dispatch(setMapData(casesData));
    };

    fetchData();
  }, [dispatch]);

  const markers = countryData.map((country: any) => {
    const {
      countryInfo,
      country: countryName,
      active,
      recovered,
      deaths,
    } = country;

    const position: [number, number] = [countryInfo.lat, countryInfo.long];

    const markerIcon = new L.Icon({
      iconUrl: countryInfo.flag,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    return (
      <Marker key={countryName} position={position} icon={markerIcon}>
        <Popup>
          <div>
            <h2>{countryName}</h2>
            <p>Active Cases: {active}</p>
            <p>Recovered: {recovered}</p>
            <p>Deaths: {deaths}</p>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <div className="map">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
