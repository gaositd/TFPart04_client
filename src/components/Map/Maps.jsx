import React, { useState } from "react";
import GoogleMaps from "simple-react-google-maps";

const sucursal = [
  {city:"cali",coorCity:{lat: 3.4142326,lng: -76.5372511},name:"stadium",lat: 3.4217317, lng: -76.5344328},
  {city:"cali",coorCity:{lat: 3.4168994,lng: -76.5260932},name:"el dorado",lat: 3.4198722, lng: -76.5276451},
  {city:"cali",coorCity:{lat: 3.4168994,lng: -76.5260932},name:"paso ancho",lat: 3.4162782, lng: -76.5289899}
]//{lat: 3.4168994,lng: -76.5260932}

export default function Maps(){
  const [sucursals, setSucursals] = useState(0);
  return (
    <div className="container">
      <select key="22" name="listaOrden" id="listaOrden" onChange={(e)=>setSucursals(e.currentTarget.value)} >
        {sucursal.map((s,i)=>{
            return <option key={`map30${i}`} value={i} >{s.name}</option>
        })}
      </select>
      <br/>
      <GoogleMaps
        apiKey={"AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}
        style={{ height: "400px", width: "100%" }}
        zoom={12}
        center={sucursal[sucursals].coorCity}
        markers={sucursal.map(s=>{return {lat:s.lat,lng:s.lng}})}
      />
    </div>
  );
}