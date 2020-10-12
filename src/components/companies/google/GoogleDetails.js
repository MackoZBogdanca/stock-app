import React from "react";
import CompanyData from "../../CompanyData";
import BackButton from "../../BackButton";

const GoogleDetails = () => {
  return (
    <div>
      <BackButton />
      <h1>Hello from GoogleDetails Component</h1>
      <CompanyData name="goog" />
    </div>
  );
};

export default GoogleDetails;
