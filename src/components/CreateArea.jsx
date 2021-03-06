import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  }); //(1)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  } //(3)

  function submitNote(event) {
    props.onAdd(note); /*(7) pass to addNote*/
    event.preventDefault();

    setNote({
      title: '',
      content: '',
    });
  } //(4)

  return (
    <div>
      <form>
        <input
          name='title'
          onChange={handleChange}
          value={note.title} /*(2)*/
          placeholder='Title'
        />
        <textarea
          name='content'
          onChange={handleChange}
          value={note.content}
          placeholder='Take a not..'
          rows='3'
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
