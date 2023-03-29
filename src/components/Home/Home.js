import React, { useEffect, useState } from "react";

import Table from "../UI/Table/Table";
import Modal from "../UI/Modal/Modal";
import Upload from "../Upload/Upload";
import Details from "../Details/Details";
import classes from "./Home.module.css";

const Home = (props) => {
  const [bcfProject, setbcfProject] = useState("");
  
  const [bcfInfo, setbcfInfo] = useState([]);
  const [bcfComments, sebcfComments] = useState([]);
  const [bcfTopics, setbcfTopics] = useState([]);

  const [showDetails, setshowDetails] = useState(false);
  const [bcfDetails, setbcfDetails] = useState("");
  const [filePath, setfilePath] = useState("");


  const addBCFHandler = (bcfData, bcfComme) => {
    setbcfInfo(bcfData);
    setbcfTopics(bcfComme);
  };

  const addProjectHandler = (bcfTitle) => {
    setbcfProject(bcfTitle);
  };

  const addFilePath = (path) => {
    setfilePath(path);
  };

  useEffect(() => {
  
  }, [bcfProject, bcfInfo, bcfComments]);

  const columns = React.useMemo(
    () => [
      {
        Header: "title",
        accessor: "title",
      },
      {
        Header: "priority",
        accessor: "priority",
      },
      {
        Header: "topic_status",
        accessor: "topic_status",
      },
      {
        Header: "creation_date",
        accessor: "creation_date",
      },
      {
        Header: "creation_author",
        accessor: "creation_author",
      },
      {
        Header: "modified_date",
        accessor: "modified_date",
      },
      {
        Header: "assigned_to",
        accessor: "assigned_to",
      },
      {
        Header: "due_date",
        accessor: "due_date",
      },
      {
        Header: "description",
        accessor: "description",
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
        var guid2 = state.original.guid;

        function checkGuid(top) {
          if (top.topic.guid === guid2) {
            return top;
          }
        }
      
        var topicComments= bcfTopics.filter(checkGuid);
        topicComments = topicComments[0].comments;

        sebcfComments(topicComments);
        setbcfDetails(guid2);
      },
    };
  };

  return (
    <>
      {showDetails && (
        <Modal onClose={hideModalHandler}>
          <Details guid={bcfDetails} comments={bcfComments} file={filePath} />
        </Modal>
      )}

      {bcfInfo.length === 0 && (
      <h1>
        Select your BCF file:
        <Upload onAddProject={addProjectHandler} onAddBCF={addBCFHandler} onAddFile={addFilePath} />
      </h1>
      )}
      {/* <Card className={classes.home}> */}
      {/* <h1>Project name: {bcfProject}</h1> */}

      {bcfInfo.length !== 0 && (
        <Table
          columns={columns}
          data={bcfInfo}
          formatRowProps={(state) => formatTrProps(state)}
        />
      )}
    </>
  );
};

export default Home;
