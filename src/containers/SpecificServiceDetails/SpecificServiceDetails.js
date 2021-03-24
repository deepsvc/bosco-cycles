import React from "react";
import BrakeBleeding from "../../components/BrakeBleeding/BrakeBleeding";

function SpecificServiceDetails(props) {
    const {service} = props;
    switch (service) {
      case 'brake':
        return <BrakeBleeding />;
    //   case 'warning':
    //     return <Warning text={text} />;
    //   case 'error':
    //     return <Error text={text} />;
      default:
        return null;
    }
  }

  export default SpecificServiceDetails;
