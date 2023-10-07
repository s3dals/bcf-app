import React, { useContext } from "react";

import BCFcontext from "../../store/bcf-data";

import Button from "../UI/Button/Button";

const ClearData = () => {
  const bcfctx = useContext(BCFcontext);
 
  const DeleteBCF = () => {
    // const exportData = bcfctx.bcfData;
    // console.log(exportData);
    bcfctx.onaddBCF([], []);
  };

  return <Button onClick={DeleteBCF}>Clear Data</Button>;
};

export default ClearData;
