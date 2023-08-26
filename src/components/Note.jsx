import React from "react";
import {RiDeleteBin6Line} from "react-icons/ri"
function Note(props) {
  function deleteItem() {
    props.onChecked(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItem}><RiDeleteBin6Line/></button>
    </div>
  );
}

export default Note;

