import React, { useContext } from "react";

import Export from "../Export/Export";
import ClearData from "../ClearData/ClearData";
// import Upload from "../Upload/Upload";
import BCFcontext from "../../store/bcf-data";

import Button from "../UI/Button/Button";
const OpenOptions = (props) => {
  const bcfctx = useContext(BCFcontext);


  return (
    <>

      <Button>Insert BCF</Button>
      &nbsp;
      <Export />
      &nbsp;
      <ClearData />
      &nbsp;
      <Button>more options</Button>
    </>
  );
};

export default OpenOptions;
