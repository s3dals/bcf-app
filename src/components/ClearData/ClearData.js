import React from "react";
import {  useDispatch } from "react-redux";


import { topicsActions } from "../../store/bcf-topics";
import { markupsActions } from "../../store/bcf-markups";
// import BCFcontext from "../../store/bcf-data";

import Button from "../UI/Button/Button";

const ClearData = () => {
  // const bcfctx = useContext(BCFcontext);
  const dispatch = useDispatch();
  const DeleteBCF = () => {
    dispatch(topicsActions.clearbcfData());
    dispatch(markupsActions.clearbcfMarkup());
    // const exportData = bcfctx.bcfData;
    // console.log(exportData);
    // bcfctx.onaddBCF([], []);
  };

  return <Button onClick={DeleteBCF}>Clear Data</Button>;
};

export default ClearData;
