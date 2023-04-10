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
    console.log(reader);

    // for (const [name, entry] of Object.entries(reader.bcf_archive.entries)) {
    //   if (name.endsWith('.png')) {
    //     console.log([entry.nameBytes]);
    //     var data = new Uint8Array(entry.nameBytes),
    //     base64Data = btoa(String.fromCharCode.apply(null, data));
    //     var blob = new Blob(data, { type: "image/png" });
    //     const img = new Image();
    //     img.src =  URL.createObjectURL(blob);
    //     // 'data:image/png;base64,' + base64Data;
    //     //  URL.createObjectURL(blob);
    //     console.log(img);
    //     console.log("data length: " + data.length);
    //     document.body.appendChild(img);
    //     // img { width: 100px; height: 100px; image - rendering: pixelated; }
    //   };
    // };

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
