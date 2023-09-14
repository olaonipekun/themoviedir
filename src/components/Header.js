import React from 'react';

const Header = (props) => {
    const source = props.source
    const span = props.span
    return (
      <>
        <div className=''>
          <div className={span}>
            The Movie Database again
            <img src={source} alt='' className='object-fill' />
          </div>
        </div>
      </>
    )
}

export default Header;
