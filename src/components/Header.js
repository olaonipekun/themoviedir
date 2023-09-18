import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const headStyle = props.headStyle
    return (
      <>
        <div className={headStyle}>
          <Link to="/">
            The Movie Directory
          </Link>
        </div>
      </>
    )
}

export default Header;
