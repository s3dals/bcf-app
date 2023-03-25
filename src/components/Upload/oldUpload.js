import JSZip from "jszip";
var XMLParser = require("react-xml-parser");

var imageBCF;
var bcfTitle;
var bcfView = [];
let index = 0;

const getTag = (struc, tag, target) => {
  try {
    var xml = new XMLParser().parseFromString(struc);
    var res = xml.getElementsByTagName(tag)[0][target];
  } catch {}
  return res;
  // console.log(xml);
};


const extractZip = async (file) => {
    const zip = new JSZip();
    const extractedFiles = await zip.loadAsync(file);

    const promises = [];

    extractedFiles.forEach(async (relativePath, file) => {
      const content = await file.async("string");
      var splitSTR = relativePath.split("/");

      if (relativePath === "project.bcfp") {
        // console.log("Project Name:");
        bcfTitle = getTag(content, "Name", "value");
        props.onAddProject(bcfTitle);
      }

      if (splitSTR[1] === "markup.bcf") {
        // console.log("Issue Title:")
        // bcfData = Object.assign(bcfData,{ [] : {  title: taskTitle  }});
        var xml = new XMLParser().parseFromString(content);
        var viewRes = xml.getElementsByTagName("Viewpoint")[1]["value"];

        // if( viewRes === "viewpoint.bcfv" ){
        //   var viewpointFile =getTag(content, "Topic", "attributes").Guid + "/viewpoint.bcfv"
        //   console.log(viewpointFile);
        //   const content2 = await viewpointFile.async("string");
        //   console.log(content2);
        // };

        bcfData.push({
          key: index,
          id: getTag(content, "Topic", "attributes").Guid,
          status: getTag(content, "Topic", "attributes").TopicStatus,
          title: getTag(content, "Title", "value"),
          Priority: getTag(content, "Priority", "value"),
          CreationDate: getTag(content, "CreationDate", "value"),
          CreationAuthor: getTag(content, "CreationAuthor", "value"),
          ModifiedDate: getTag(content, "ModifiedDate", "value"),
          ModifiedAuthor: getTag(content, "ModifiedAuthor", "value"),
          DueDate: getTag(content, "DueDate", "value"),
          AssignedTo: getTag(content, "AssignedTo", "value"),
          Description: getTag(content, "Description", "value"),
          Image: getTag(content, "Snapshot", "value"),
          Viewpoint: viewRes,
        });
        index = index + 1;
      }

      if (splitSTR[1] === "snapshot.png") {
        const promise = file.async("blob").then((blob) => {
          const img = new Image();
          img.src = URL.createObjectURL(blob);
          // document.body.prepend(img);
          imageBCF = blob;

          bcfSnap.push({
            id: splitSTR[0],
            Img: imageBCF,
          });
        });
        promises.push(promise);
      }

      if (splitSTR[1] === "viewpoint.bcfv") {
        console.log(splitSTR[0]);
        bcfView.push({
          id: splitSTR[0],
          FieldOfView: getTag(content, "AssignedTo", "value"),
        });
        console.log(bcfView);
      }
    });

 
    //  bcfData =  bcfData.map((data) => {
    //   if (data.Image === "snapshot.png") {
    //     var snapshot = bcfSnap.filter((obj) => obj.id === data.id);
    //     return {
    //       ...data,
    //       Image: snapshot[0].Img,
    //     };
    //   } else {
    //     return data;
    //   }
    // });

    await Promise.all(promises);
  };


  async function readBCF(target) {
    // await extractZip(target);

    // var  bcfData2 =  await bcfData[0].map((data) => {
    //   if (data.Image === "snapshot.png") {
    //     var snapshot = bcfData[1].filter((obj) => obj.id === data.id);
    //     return {
    //       ...data,
    //       Image: snapshot[0].Img,
    //     };
    //   } else {
    //     return data;
    //   }
    // });

    props.onAddImg(bcfSnap, bcfData);
    props.onAddBCF(bcfData);
  };