import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";

import Card from "../UI/Card/Card";
import Table from "../UI/Table/Table";
import TableContent from "../UI/Table-old/TableContent";
import Upload from "../Upload/Upload";
import classes from "./Home.module.css";

const Home = (props) => {
  const [bcfProject, setbcfProject] = useState("");
  const [bcfInfo, setbcfInfo] = useState([]);
  const img = new Image();
          

  const addBCFHandler = (bcfData) => {
    setbcfInfo(bcfData);
    
  };

  const addProjectHandler = (bcfTitle) => {
    setbcfProject(bcfTitle);
  };

 

  useEffect(() => {

    
  }, [bcfProject, bcfInfo]);

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


  return (
    <>
      <h1>
        Select your BCF file:
        <Upload onAddProject={addProjectHandler} onAddBCF={addBCFHandler} />
      </h1>
      {/* <Card className={classes.home}> */}
        <h1>Project name: {bcfProject}</h1>

        {bcfInfo.length !== 0 &&  <Table columns={columns} data={bcfInfo} />}
       

        {/* {bcfInfo.map((bcf) => (
          <Card key={bcf.index} className={classes.home}>
           <h1>{bcf.title}</h1> 
            
              <Table> 
              <TableContent title="priority:" value={bcf.priority} />
              <TableContent title="status:" value={bcf.topic_status} />
              <TableContent title="CreationAuthor:" value={bcf.creation_author} />
              <TableContent title="CreationDate:" value={bcf.creation_date} />
              <TableContent title="ModifiedAuthor:" value={bcf.modified_author} />
              <TableContent title="ModifiedDate:" value={bcf.modified_date} />
              <TableContent title="AssignedTo:" value={bcf.assigned_to} />          
              <TableContent title="DueDate:" value={bcf.due_date} />    
              <TableContent title="description:" value={bcf.description} /> 
              </Table>

          </Card>
        ))} */}
      {/* </Card> */}
    </>
  );
};

export default Home;
