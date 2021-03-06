import React from 'react';
import EmojiObjectsSharpIcon from '@material-ui/icons/EmojiObjectsSharp';

function Header() {
  return (
    <header className='header'>
      <h1>
        <EmojiObjectsSharpIcon fontSize='large' />
        Note Keeper
      </h1>
    </header>
  );
}

export default Header;
