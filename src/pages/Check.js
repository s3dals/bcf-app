import React, {useContext} from "react";

import BCfInfo from "../components/BCFInfo/BCFInfo";
import Open from "../components/Open/Open";

import BCFcontext from "../store/bcf-data";
function Check() {
  const bcfctx = useContext(BCFcontext);
  return (
    <>
      <h1>Check Page</h1>
      {bcfctx.bcfMarkup.length !== 0 && <BCfInfo />} 

      <Open />
    </>
  );
}

export default Check;
