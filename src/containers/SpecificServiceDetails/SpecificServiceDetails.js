import React from "react";
import BrakeBleeding from "../../components/SpecificServicesPages/BrakeBleeding/BrakeBleeding";
import WheelTurning from "../../components/SpecificServicesPages/WheelTurning/WheelTurning";
import SuspensionService from "../../components/SpecificServicesPages/SuspensionService/SuspensionService";
import DriveTrainService from "../../components/SpecificServicesPages/DriveTrainService/DriveTrainService";

function SpecificServiceDetails(props) {
  const { service } = props;
  switch (service) {
    case "brake":
      return <BrakeBleeding />;
    case "wheel":
      return <WheelTurning />;
    case "suspension":
      return <SuspensionService />;
    case "drive":
      return <DriveTrainService />;
    default:
      return null;
  }
}

export default SpecificServiceDetails;
