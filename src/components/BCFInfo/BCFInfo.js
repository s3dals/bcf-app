import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import classes from './Button.module.css';

const BCFInfo = (props) => {

  const bcfMarkup = useSelector((state) => state.markups.bcfMarkup);
  const bcfTopics = useSelector((state) => state.topics.bcfData);

  const [projectName, setProjectName] = useState();
  const [projectID, setProjectID] = useState();
  const [BCFVersion, setBCFVersion] = useState();

  let BCFVersionKEY = Object.keys(bcfTopics).filter(
    (key) => Object.keys(bcfTopics[key])[0] === "bcf.version"
  );
  const BCFVersionJS =
    bcfTopics[BCFVersionKEY]["bcf.version"].Version["@_VersionId"];

    let BCFProjectName = "";
    let BCFProjectID = "";
    // console.log(Object.values(bcfTopics))

  // if ( "project.bcfp" in bcfTopics) {
    
    let BCFProjectKEY = Object.keys(bcfTopics).filter(
      (key) => Object.keys(bcfTopics[key])[0] === "project.bcfp"
    );
    
    console.log(bcfTopics)
    if (BCFProjectKEY.length  !== 0) {
     BCFProjectName =
      bcfTopics[BCFProjectKEY]["project.bcfp"]?.ProjectExtension?.Project.Name;
      
     BCFProjectID =
      bcfTopics[BCFProjectKEY]["project.bcfp"]?.ProjectExtension?.Project["@_ProjectId"];

    // console.log(bcfTopics[BCFProjectKEY]["project.bcfp"]);
  // } else {
    
  //   BCFProjectName = "";
  //   BCFProjectID = "";
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
  // bcfTopics[BCFProjectKEY]["project.bcfp"].ProjectExtension.Project["@_ProjectId"]
  // "test"
  // );

  return (
    <div>
      <ul>BCF Version: {bcfMarkup.length !== "" && BCFVersion}</ul>

      <ul> Project Name: {bcfMarkup.length !== "" && projectName}</ul>
      <ul> Project ID: {bcfMarkup.length !== "" && projectID}</ul>
    </div>
  );
};

export default BCFInfo;
