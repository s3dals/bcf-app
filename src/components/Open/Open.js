import React, { useState, useContext } from "react";

import Table from "../UI/Table/Table";
import Modal from "../UI/Modal/Modal";
import Upload from "../Upload/Upload";
import Details from "../Details/Details";
import Export from "../Export/Export";
// import classes from "./Home.module.css";

import BCFcontext from "../../store/bcf-data";
// const homeMarkup = [];

const Home = (props) => {
  const [bcfComments, setbcfComments] = useState([]);
  const [bcfImage, setbcfImage] = useState();

  const [showDetails, setshowDetails] = useState(false);
  const [bcfDetails, setbcfDetails] = useState("");

  const bcfctx = useContext(BCFcontext);

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

        let imgKey = Object.keys(bcfctx.bcfData).filter(
          (key) =>
            Object.keys(bcfctx.bcfData[key])[0].split("/")[0] === guid &&
            checkImg(Object.keys(bcfctx.bcfData[key])[0])
        );

        if (imgKey) {
          let i = 0;
          const imgs = [];
          while (i < imgKey.length) {
            imgs.push(bcfctx.bcfData[imgKey[i]][Object.keys(bcfctx.bcfData[imgKey[i]])]);
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

  return (
    <>
      {showDetails && (
        <Modal onClose={hideModalHandler}>
          <Details guid={bcfDetails} comments={bcfComments} photo={bcfImage} />
        </Modal>
      )}

      {bcfctx.bcfData.length === 0 && (
        <h2>
          Select your BCF file:
          <Upload />
        </h2>
      )}
      {/* <Card className={classes.home}> */}
      {/* <h1>Project name: {bcfProject}</h1> */}
      {bcfctx.bcfMarkup.length !== 0 && <Export data={bcfctx.bcfData} />}
      {bcfctx.bcfMarkup.length !== 0 && (
        // console.log(bcfctx.bcfMarkup),
        <Table
          columns={columns}
          data={bcfctx.bcfMarkup}
          formatRowProps={(state) => formatTrProps(state)}
        />
      )}
    </>
  );
};

export default Home;
