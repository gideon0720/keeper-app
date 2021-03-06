import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);
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

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            name='title'
            onChange={handleChange}
            value={note.title} /*(2)*/
            placeholder='Title'
          />
        )}
        <textarea
          onClick={expand}
          name='content'
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note...'
          rows={isExpanded ? 3 : 1}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <NoteAddRoundedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
