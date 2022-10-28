import logo from './logo.svg';
import './App.css';
import VerificationPage from "./pages/verification";
import ErrorAlert from "./components/alerts/ErrorAlert";
import SuccessModal from "./components/alerts/SuccessModal";
import React from "react";

function App() {
  return (
    <div className="App h-screen bg-ice-cream-bg lg:bg-contain bg-center w-screen bg-cover">
      <VerificationPage/>
    </div>
  );
}

export default App;
