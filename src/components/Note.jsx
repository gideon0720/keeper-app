import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  } //(11)

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <HighlightOffIcon />
      </button>
    </div>
  );
}

export default Note;
