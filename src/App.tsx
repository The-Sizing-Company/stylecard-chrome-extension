import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserLoginSignUp from "./templates/UserLoginSignup/UserLoginSignUp";
import UserGeneralInfo from "./templates/UserGeneralInfo/UserGeneralInfo";
import UserStylePreferences from "./templates/UserStylePreferences/UserStylePreferences";

function App() {
  // The following hook controls current view display based on view index [1-5]
  const [currentView, setCurrentView] = useState(1);
  return (
    <>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/segoe-ui-4"
          rel="stylesheet"
        />
      </head>
      <main>
        <div className="App">
          {currentView === 1 && (
            <UserLoginSignUp setCurrentView={setCurrentView} />
          )}
          {currentView === 2 && (
            <UserGeneralInfo setCurrentView={setCurrentView} />
          )}
          {currentView === 3 && (
            <UserStylePreferences setCurrentView={setCurrentView} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
