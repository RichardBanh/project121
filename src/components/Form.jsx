import React from "react";
import {Link, useParams} from "react-router-dom";



export default function Form(props) {
  if (props.id) {
    return (
      <>
          <div>{props.department}</div>
          <input
          type="text"
          name={props.department}
          value={props.weight}
        />
      </>
    );
  } else {
    return (
      <>
          <Link to={props.department}>{props.department}</Link>
          <input
          type="text"
          name={props.department}
          value={props.weight}
        />
      </>
    );
  }
  
  
}