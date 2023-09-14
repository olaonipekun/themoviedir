import React from 'react';

const Header = (props) => {
    const source = props.source
    const span = props.span
    return (
      <>
        <div className='col-span-full p-0 bg-slate-600 row-span-1'>
          <div className={span}>
            The Movie Database
            <img src={source} alt='' className='object-fill' />
          </div>
        </div>
      </>
    )
}

export default Header;
