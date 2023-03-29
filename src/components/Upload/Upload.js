// import { BcfReader } from "@parametricos/bcf-js";
import { BcfReader } from "../BCF-js-main/BcfReader.ts";
import classes from "./Upload.module.css";
import JSZip from "jszip";
var bcfData = [];
var bcfComments = [];
var bcfSnap = [];

const Upload = (props) => {
  const getBCF = async (file) => {
    const reader = new BcfReader();


    await reader.read(file);

    // console.log(reader.bcf_archive.entries);
    console.log(reader.topics);
    


    reader.topics.forEach((topic) => {
      bcfData.push(topic.markup.topic);
      bcfComments.push(topic.markup);

 
    });
    props.onAddBCF(bcfData, bcfComments);
    
  };


  async function readBCF(target) {
    getBCF(target);
    // extractZip(target);
    // props.onAddImg(bcfSnap);
    props.onAddFile(target);
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
