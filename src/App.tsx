import React, { useState } from "react";
import "./App.css";
import UserGeneralInfo from "./templates/UserGeneralInfo/UserGeneralInfo";
import UserStylePreferences from "./templates/UserStylePreferences/UserStylePreferences";
import UserSignIn from "./templates/UserSignIn/UserSignIn";
import UserSignUp from "./templates/UserSignUp/UserSignUp";
import UserMeasurements from "./templates/UserMeasurements/UserMeasurements";

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
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-bold"
          rel="stylesheet"
        />
      </head>
      <main>
        <div className="App">
          {currentView === 0 && <UserSignUp setCurrentView={setCurrentView} />}
          {currentView === 1 && <UserSignIn setCurrentView={setCurrentView} />}
          {currentView === 2 && (
            <UserStylePreferences setCurrentView={setCurrentView} />
          )}
          {currentView === 3 && (
            <UserMeasurements setCurrentView={setCurrentView} />
          )}
          {currentView === 4 && (
            <UserGeneralInfo setCurrentView={setCurrentView} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
