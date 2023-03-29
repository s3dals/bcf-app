import React, { useState, useEffect } from "react";
import JSZip from "jszip";

import classes from "./Details.module.css";

const Details = (props, id) => {
  const [bcfimg, setbcfimg] = useState();

  const extractZip = async (file) => {
    const zip = new JSZip();
    const extractedFiles = await zip.loadAsync(file);

    extractedFiles.forEach(async (relativePath, file) => {
      var splitSTR = relativePath.split("/");

      if (splitSTR[0] === props.guid && splitSTR[1] === "snapshot.png") {
        file.async("blob").then((blob) => {
          const img = new Image();
          img.src = URL.createObjectURL(blob);
          //   var doc = document.body.prepend(img);
          setbcfimg(img.src);
        });
      }
    });
  };

  useEffect(() => {
    extractZip(props.file, props.guid);
  }, []);
  return (
    <header className={classes.details}>
      <img src={bcfimg} alt="viewpoint" width={500} />
      <h2>Comments:</h2>
      <hr />
      {props.comments && props.comments.length > 0 &&
        props.comments.map((post) => (
          <div key={post.guid}>
            <li>Comment: {post.comment} </li>
            <li>Author: {post.author} </li>
            <li>Date: {post.date} </li>
            <li>modified author: {post.modified_author} </li>
            <li>modified date: {post.modified_date} </li>
            <li>viewpoint: {post.viewpoint} </li>
            <hr />
          </div>
        ))}
      {!props.comments && <h3>No comments!</h3>}
    </header>
  );
};

export default Details;
