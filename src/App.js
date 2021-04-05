import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound"
import FAQ from "./containers/FAQ/FAQ"

import "./App.css";
import "./index.css";
import "./assets/css/tailwind.css";
import About from "./components/About/About";
import SpecificServiceDetails from "./containers/SpecificServiceDetails/SpecificServiceDetails";
import SimpleForm from "./containers/SimpleForm/SimpleForm";

function App() {
  return (
    <div className="App" data-spy="scroll"> 
      <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/BrakeBleeding" exact component={(props) => <SpecificServiceDetails service="brake"  {...props} />} />
          <Route path="/WheelTuring" exact component={(props) => <SpecificServiceDetails service="wheel"  {...props} />} />
          <Route path="/SuspensionService" exact component={(props) => <SpecificServiceDetails service="suspension"  {...props} />} />
          <Route path="/DriveTrainService" exact component={(props) => <SpecificServiceDetails service="drive"  {...props} />} />
          <Route path="/BookPaintJob" exact component={(props) => <SimpleForm form="book custom paint job" {...props} /> }/>
          <Route path="/BookBrakeBleeding" exact component={(props) => <SimpleForm form="book brake bleeding service" {...props} /> }/>
          <Route path="/BookWheelTuring" exact component={(props) => <SimpleForm form="book Wheel Turing Service" {...props} /> }/>
          <Route path="/BookSuspensionService" exact component={(props) => <SimpleForm form="book Suspension Service" {...props} /> }/>
          <Route path="/BookDriveTrainService" exact component={(props) => <SimpleForm form="book Drive Train Service" {...props} /> }/>
          {/* <Route path="/#about" component={About} /> */}
          {/* <Route path="/book" exact component={ServiceScreen} />
          <Route path="/BookDoorStep" exact component={ServiceScreenDoorStep} />
          <Route path="/brakebleeding" exact component={BrakeBleeding} />

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
          <Route component={NotFound} />
        </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
