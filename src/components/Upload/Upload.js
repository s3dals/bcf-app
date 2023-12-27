// import { BcfReader } from "@parametricos/bcf-js";
import JSZip from "jszip";
import parser from "fast-xml-parser";

import React from "react";
import {  useDispatch } from "react-redux";


import { topicsActions } from "../../store/bcf-topics";
import { markupsActions } from "../../store/bcf-markups";

import classes from "./Upload.module.css";

// import BCFcontext from "../../store/bcf-data";

const xmlParserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  attributesGroupName: "@_",
  // textNodeName: "#text",
  ignoreNameSpace: true,
  allowBooleanAttributes: true,
  parseNodeValue: true,
  parseAttributeValue: true,
  trimValues: true,
  // transformAttributeName: (attributeName) => attributeName.toLowerCase(),
};
var data = [];
var bcfData = [];
var bcfMarkup = [];


const Upload = (props) => {
  
  const dispatch = useDispatch();
  

  
  // const bcfctx = useContext(BCFcontext);

  const zip = new JSZip();

  const getBCF = async (file) => {
    const extractedFiles = await zip.loadAsync(file);

    extractedFiles.forEach(async (relativePath, file) => {
      const content = await file.async("string");
      var splitSTR = relativePath.split("/");

      // if (relativePath === "project.bcfp") {
      // console.log("Project Name:");
      // bcfTitle = getTag(content, "Name", "value");
      // props.onAddProject(bcfTitle);
      // }

      // console.log(relativePath);
      if (relativePath.endsWith(".png") || relativePath.endsWith(".jpeg")) {
        file.async("blob").then((blob) => {
          const img = new Image();
          img.src = URL.createObjectURL(blob);

          bcfData.push({
            [relativePath]: img.src,
          });
          dispatch(topicsActions.addbcfData({ [relativePath]: img.src}));
          // document.body.prepend(img);
        });
      }
      
      if (
        !relativePath.endsWith(".png") &&
        !relativePath.endsWith(".jpeg") &&
        !relativePath.endsWith("/")
      ) {
        const Markup = parser.parse(content, xmlParserOptions);
        // data.push({
        //   [relativePath]: Markup,
        // });
        data[splitSTR[0]] = Markup;

        // data =  {...data,[relativePath]: Markup };

        // let obj = Object.assign(obj2, { [relativePath]: Markup });
        bcfData.push({
          [relativePath]: Markup,
        });

        dispatch(topicsActions.addbcfData({ [relativePath]: Markup})); 

        if (splitSTR[1] === "markup.bcf") {
          // console.log(Markup);
          // console.log(typeof Markup)
          // Markup.Topic.forEach((Topic) => {
          bcfMarkup.push(Markup.Markup);
          dispatch(markupsActions.addbcfMarkup(Markup.Markup));
          // });

          // Object.keys(Markup).forEach(key => {
          // console.log( Markup[key]);
          // });
        }
        // bcfctx.onaddBCF(bcfData, bcfMarkup);
        // dispatch(topicsActions.addbcfData(bcfData));
        
        // dispatch(topicsActions.addbcfData(bcfData)); 
        // dispatch(topicsActions.addbcfMarkup(bcfMarkup)); 
      }
    });

    return bcfData;
  };

  async function readBCF(target) {
    
    data = await  getBCF(target);
    
    // dispatch(topicsActions.addbcfData({ test: "Markup"})); 

    bcfData.length = 0;
    bcfMarkup.length = 0;

    // console.log(data['0a8fa0ff-fc81-4bb2-9600-fde88d5a9cde']);
    // Object.keys(bcfimport).forEach(key => {
    //   console.log(key, bcfimport[key]);
    // });

    // props.onAddImg(bcfSnap);
    // bcfctx.onaddBCF(data, bcfMarkup);
  }
  
  return (
    <>
      <input
        className={classes.upload}
        type="file"
        id="file"
        accept=".bcf"
        onChange={(e) => readBCF(e.target.files[0])}
      />
      
     
    </>
  );
};

export default Upload;
