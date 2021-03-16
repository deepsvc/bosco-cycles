import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./containers/Home/Home"

import logo from './logo.svg';
import './App.css';
import './index.css';
import "./assets/css/tailwind.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/book" exact component={ServiceScreen} />
          <Route path="/BookDoorStep" exact component={ServiceScreenDoorStep} />
          <Route path="/brakebleeding" exact component={BrakeBleeding} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/PaintJob" exact component={PaintJob} />
          <Route path="/WheelTurning" exact component={WheelTurning} />
          <Route
            path="/SuspensionService"
            exact
            component={SuspensionService}
          />
          <Route
            path="/DriveTrainService"
            exact
            component={DriveTrainService}
          />
          <Route path="/BrakeForm" exact component={BrakeForm} />
          <Route path="/WheelTruingForm" exact component={WheelForm} />
          <Route
            path="/SuspensionServiceForm"
            exact
            component={SuspensionServiceForm}
          />
          <Route path="/DriveTrainForm" exact component={DriveForm} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
