// import React, { useState, useContext } from "react";
import React from "react";

import classes from "./Details.module.css";
// import BCFcontext from "../../store/bcf-data";

const Details = (props, id) => {
  // const bcfctx = useContext(BCFcontext);

  // let imgKey = Object.keys(bcfctx.bcfData).find(key => Object.keys(bcfctx.bcfData[key])[0] === guid + "/snapshot.png")

  // if (imgKey) {
  //   let img = bcfctx.bcfData[imgKey][guid + "/snapshot.png"];
  //   // setbcfImage(img);
  // }

  return (
    <div className={classes.details}>
      {props.photo &&
        props.photo.length > 0 &&
        props.photo.map((pic) => (
          <div key={pic}>
            <img src={pic} alt="viewpoint" title="" width={500} />
          </div>
        ))}
      {/* <img src={props.photo} alt="viewpoint" width={500} />} */}
      <h2 style={{ textAlign: "center" }}>Comments:</h2>
      <hr />

      {props.comments &&
        props.comments.length > 0 &&
        props.comments.map((post) => (
          <div key={post["@_Guid"]}>
            <li>Comment: {post.Comment} </li>
            <li>Author: {post.Author} </li>
            <li>Date: {post.Date} </li>
            <li>modified author: {post.ModifiedAuthor} </li>
            <li>modified date: {post.ModifiedDate} </li>
            <li>
              viewpoint:{" "}
              {post.Viewpoint &&
                post.Viewpoint["@_Guid"] &&
                post.Viewpoint["@_Guid"]}
              {/* props.guid + "/Snapshot_" +post.Viewpoint["@_Guid"] + ".png" */}
            </li>

            <hr />
          </div>
        ))}
      {!props.comments && <h1>No comments!</h1>}
    </div>
  );
};

export default Details;
