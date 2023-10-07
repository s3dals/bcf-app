import React, { useContext, useState, useEffect } from "react";

import BCFcontext from "../../store/bcf-data";
// import classes from './Button.module.css';

const BCFInfo = (props) => {
  const bcfctx = useContext(BCFcontext);

  const [projectName, setProjectName] = useState();
  const [projectID, setProjectID] = useState();
  const [BCFVersion, setBCFVersion] = useState();

  let BCFVersionKEY = Object.keys(bcfctx.bcfData).filter(
    (key) => Object.keys(bcfctx.bcfData[key])[0] === "bcf.version"
  );
  const BCFVersionJS =
    bcfctx.bcfData[BCFVersionKEY]["bcf.version"].Version["@_VersionId"];

    let BCFProjectName = "";
    let BCFProjectID = "";

  if ( "project.bcfp" in bcfctx.bcfData) {
    let BCFProjectKEY = Object.keys(bcfctx.bcfData).filter(
      (key) => Object.keys(bcfctx.bcfData[key])[0] === "project.bcfp"
    );
    // if (bcfctx.bcfData[BCFProjectKEY]["project.bcfp"] ) {
     BCFProjectName =
      bcfctx.bcfData[BCFProjectKEY]["project.bcfp"].ProjectExtension.Project.Name;

     BCFProjectID =
      bcfctx.bcfData[BCFProjectKEY]["project.bcfp"].ProjectExtension.Project["@_ProjectId"];

    // console.log(bcfctx.bcfData["project.bcfp"]);
  } else {
    BCFProjectName = "";
    BCFProjectID = "";
  };

  // DetailedVersion
  // const BCFProjectName = "";
  // const BCFProjectID = "";

  useEffect(() => {
    setBCFVersion(BCFVersionJS);
    setProjectName(BCFProjectName);
    setProjectID(BCFProjectID);
  }, [BCFVersionJS, BCFProjectName, BCFProjectID]);

  // console.log(
  // bcfctx.bcfData[BCFProjectKEY]["project.bcfp"].ProjectExtension.Project["@_ProjectId"]
  // "test"
  // );

  return (
    <div>
      <ul>BCF Version: {bcfctx.bcfMarkup.length !== "" && BCFVersion}</ul>

      <ul> Project Name: {bcfctx.bcfMarkup.length !== "" && projectName}</ul>
      <ul> Project ID: {bcfctx.bcfMarkup.length !== "" && projectID}</ul>
    </div>
  );
};

export default BCFInfo;
