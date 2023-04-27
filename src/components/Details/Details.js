import classes from "./Details.module.css";

const Details = (props, id) => {

  return (
    <div className={classes.details}>
      {props.photo && <img src={props.photo} alt="viewpoint" width={500} />}
      <h2 style={{textAlign: "center"}}>Comments:</h2>
      <hr />
      {props.comments && props.comments.length > 0 &&
        props.comments.map((post) => (
          <div key={post["@_Guid"]}>
            <li>Comment: {post.Comment} </li>
            <li>Author: {post.Author} </li>
            <li>Date: {post.Date} </li>
            <li>modified author: {post.ModifiedAuthor} </li>
            <li>modified date: {post.ModifiedDate} </li>
            <li>viewpoint: {post.viewpoint} </li>
            <hr />
          </div>
        ))}
      {!props.comments && <h1>No comments!</h1>}
    </div>
  );
};

export default Details;
