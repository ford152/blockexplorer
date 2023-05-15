import React from 'react';
import logo from '../img/alexscan.png';
import refresh from '../img/refresh.png';
import './Header.css';

function Header({
  refreshCallback
}) {
  return ( <
    div className = "columns" >
    <
    div className = "column" > < img src = {
      logo
    }
    alt = "Alexscan" / > < /div> <
    div className = "column" > < /div> <
    div className = "columnR" >
    <
    img src = {
      refresh
    }
    width = {
      50
    }
    height = {
      50
    }
    alt = "refresh"
    onClick = {
      () => refreshCallback()
    }
    /> <
    /div> <
    /div>
  );

}

export default Header;