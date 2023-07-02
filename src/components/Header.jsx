import React from 'react';
import '../assets/Header.css';

import Title from './Title';
import ColorMode from './ColorMode';
import CurrentTime from './CurrentTime';



const Header = () => {
  return (

    <div className='header'>
      {/* <CurrentTime /> */}
      <Title />
      {/* <ColorMode /> */}
    </div>


  );
};

export default Header;