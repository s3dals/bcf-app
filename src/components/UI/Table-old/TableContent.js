import React from "react";

const TableContent = (props) => {
  return (
    <>
        <tr>
          <th>{props.title}</th>
          <td>{props.value}</td>
        </tr>
        </>
  );
};

export default TableContent;
