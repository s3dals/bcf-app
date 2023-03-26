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

    // const img = new Image();
    // img.src = URL.createObjectURL(reader.getViewpointSnapshot);
    // document.body.prepend(img);

    await reader.read(file);

    // console.log(reader.bcf_archive.entries);
    console.log(reader.topics);
    
    // var pic = await reader.topics[1].getViewpointSnapshot();

    // const promise = pic.async("blob").then((blob) => {
    //   const img = new Image();
    //   img.src = URL.createObjectURL(blob);
    //   document.body.prepend(img);

    // });

    reader.topics.forEach((topic) => {
      bcfData.push(topic.markup.topic);
      bcfComments.push(topic.markup);

 
    });
    props.onAddBCF(bcfData, bcfComments);
    
  };

  // const extractZip = async (file) => {
  //   const zip = new JSZip();
  //   const extractedFiles = await zip.loadAsync(file);

  //   const promises = [];

  //   extractedFiles.forEach(async (relativePath, file) => {
  //     var splitSTR = relativePath.split("/");

  //     if (splitSTR[1] === "snapshot.png") {
  //       const promise = file.async("blob").then((blob) => {
  //         const img = new Image();
  //         img.src = URL.createObjectURL(blob);
  //         document.body.prepend(img);
  //       });
  //       promises.push(promise);
  //     }
  //   });
  //   await Promise.all(promises);
  // };

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
