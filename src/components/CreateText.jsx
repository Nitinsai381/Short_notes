import React from "react";

function CreateArea(prop) {
  const [inputNote, setNote] = React.useState({
    title: "",
    content: ""
  });

  function addNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  console.log(setNote);

  function handleClick(event) {
    prop.onAdd(inputNote);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={addNote}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onChange={addNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;