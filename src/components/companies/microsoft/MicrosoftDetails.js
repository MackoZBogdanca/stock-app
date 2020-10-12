import React from "react";
import CompanyData from "../../CompanyData";
import BackButton from "../../BackButton";

const MicrosoftDetails = () => {
  return (
    <div>
      <BackButton />
      <h1>Hello from MicrosoftDetails Component</h1>
      <CompanyData name="msft" />
    </div>
  );
};

export default MicrosoftDetails;
