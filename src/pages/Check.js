import React from "react";

import BCfInfo from "../components/BCFInfo/BCFInfo";
import Open from "../components/Open/Open";

import { useSelector } from "react-redux";


function Check() {
  const bcfMarkup = useSelector((state) => state.markups.bcfMarkup);

  return (
    <>
      <h1>Check Page</h1>
      {bcfMarkup.length !== 0 && <BCfInfo />} 

      <Open />
    </>
  );
}

export default Check;
