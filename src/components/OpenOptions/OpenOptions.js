import React, {useRef} from "react";

import Export from "../Export/Export";
import ClearData from "../ClearData/ClearData";
// import Upload from "../Upload/Upload";

import Button from "../UI/Button/Button";

const OpenOptions = (props) => {
  
  const ref = useRef(null);

  async function readBCF() {
    ref.current.focus();

  }
  return (
    <>
    <label onChange={readBCF()} htmlFor="formId">
      <input  type="file"
       name="upload"
        id="formId"
        accept=".bcf" hidden  />
        <Button onClick={readBCF} >Insert BCF</Button> 
        
        </label>
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
