import React, { useState } from "react";
import { useSelector } from "react-redux";

import Table from "../UI/Table/Table";
import Modal from "../UI/Modal/Modal";
import Upload from "../Upload/Upload";
import Details from "../Details/Details";

import OpenOptions from "../OpenOptions/OpenOptions";
// import classes from "./Home.module.css";

// const homeMarkup = [];

const Home = (props) => {
  const [bcfComments, setbcfComments] = useState([]);
  const [bcfImage, setbcfImage] = useState();

  const [showDetails, setshowDetails] = useState(false);
  const [bcfDetails, setbcfDetails] = useState("");


  const bcfMarkup = useSelector((state) => state.markups.bcfMarkup);
  const bcfTopics = useSelector((state) => state.topics.bcfData);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "Topic.Title",
      },
      {
        Header: "Priority",
        accessor: "Topic.Priority",
      },
      {
        Header: "Topicstatus",
        accessor: "Topic.@_TopicStatus",
      },
      {
        Header: "CreationDate",
        accessor: "Topic.CreationDate",
      },
      {
        Header: "CreationAuthor",
        accessor: "Topic.CreationAuthor",
      },
      {
        Header: "ModifiedDate",
        accessor: "Topic.ModifiedDate",
      },
      {
        Header: "AssignedTo",
        accessor: "Topic.AssignedTo",
      },
      {
        Header: "DueDate",
        accessor: "Topic.DueDate",
      },
      {
        Header: "Description",
        accessor: "Topic.Description",
      },
    ],
    []
  );

  function hideModalHandler() {
    setshowDetails(false);
  }
  const formatTrProps = (state = {}) => {
    //
    return {
      onClick: () => {
        setshowDetails(true);
        
        var guid = state.original.Topic["@_Guid"];

        var topicComments = [];
        if (state.original.Comment && !state.original.Comment.length) {
          topicComments.push(state.original.Comment);
          
        } else {
          topicComments = state.original.Comment;
        }
        
        function checkImg(data) {
          return data.endsWith(".png") || data.endsWith(".jpeg");
        }

        

        let imgKey =  Object.keys(bcfTopics).filter(
          (key) =>
            Object.keys(bcfTopics[key])[0]?.split("/")[0] === guid &&
            checkImg(Object.keys(bcfTopics[key])[0])
        );

        if (imgKey) {
          let i = 0;
          const imgs = [];
          while (i < imgKey.length) {
            imgs.push(
              bcfTopics[imgKey[i]][Object.keys(bcfTopics[imgKey[i]])]
            );
            i++;
          }
          // let img = bcfctx.bcfData[imgKey][Object.keys(bcfctx.bcfData[imgKey])];
          setbcfImage(imgs);
        } else {
          setbcfImage();
        }

        setbcfComments(topicComments);
        setbcfDetails(guid);
      },
    };
  };

  // bcfMarkup.map(home => console.log( home ) )
  return (
    <>
      {showDetails && (
        <Modal onClose={hideModalHandler}>
          <Details guid={bcfDetails} comments={bcfComments} photo={bcfImage} />
        </Modal>
      )}

      {bcfMarkup.length === 0 && (
        <h2>
          Select your BCF file:
          <Upload />
        </h2>
      )}

      {/* <Card className={classes.home}> */}
      {/* <h1>Project name: {bcfProject}</h1> */}
      {bcfMarkup.length !== 0 && <OpenOptions />}
      {bcfMarkup.length !== 0 && (

        <>
          <Table
            columns={columns}
            data={bcfMarkup}
            formatRowProps={(state) => formatTrProps(state)}
          />
        </>
      )}
    </>
  );
};

export default Home;
