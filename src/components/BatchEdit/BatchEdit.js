// import React, { useState, useContext } from "react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./BatchEdit.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
// import BCFcontext from "../../store/bcf-data";

const BatchEdit = (props) => {
  let editedbcfTopics = [];
  const bcfMarkup = useSelector((state) => state.markups.bcfMarkup);
  const bcfTopics = useSelector((state) => state.topics.bcfData);

  const [enteredTitle, setEnteredTitle] = useState("");

  function authorChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    // console.log(bcfTopics);
    // console.log(enteredTitle);

    let topicsKeys = Object.keys(bcfTopics).filter(
      (key) => Object.keys(bcfTopics[key])[0]?.split("/")[1] === "markup.bcf"
    );
    console.log(topicsKeys.includes("4"));
    // const mapKeys = Key.map(item => {
    //  return bcfTopics[Key[item]][Object.keys(bcfTopics[Key[item]])].Markup.Topic.Title
    // })

    // const mapKeys = Object.keys(topicsKeys).forEach(function(key, index) {
    //   return topicsKeys[key] ;
    // });
    editedbcfTopics = [];
    for (var key1 in bcfTopics) {
      let check = topicsKeys.includes(key1);
      // if (check) {
        editedbcfTopics.push(bcfTopics[key1]);
      // }
    }

    for (var key in topicsKeys) {
      if (topicsKeys.hasOwnProperty(key)) {
        // console.log(topicsKeys[key] );

        let vorTitle =
          editedbcfTopics[topicsKeys[key]][
            Object.keys(editedbcfTopics[topicsKeys[key]])
          ].Markup.Topic.Title;
        let endTitle = enteredTitle + " " + vorTitle;
        // editedbcfTopics[topicsKeys[key]][Object.keys(editedbcfTopics[topicsKeys[key]])].Markup.Topic.Title = endTitle;

        console.log(editedbcfTopics);
      }
    }
  }

  return (
    <div className={classes.details}>
      <h2 style={{ textAlign: "center" }}>Batch Edit</h2>
      <hr />
      <div>{props.guid}</div>
      <form onSubmit={submitHandler}>
        <label>
          Title Prefix: &nbsp;
          <Input type="text" id="title" onChange={authorChangeHandler}>
            submit
          </Input>
        </label>
        <br />
        <br />
        <Button onClick={submitHandler}>submit</Button>
      </form>
    </div>
  );
};

export default BatchEdit;
