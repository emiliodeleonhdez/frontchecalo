import React from "react";
import Background from './Components/Backgrounds/Background.jsx'
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Button from '@mui/material/Button';
// import PrimaryButton from "./Components/Buttons/Primary/PrimaryButton";
import MainCard from "./Components/Cards/MainCard";
import Login from "./Components/Login/Login.jsx";



function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;